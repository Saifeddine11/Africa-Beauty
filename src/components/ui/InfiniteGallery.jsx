import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const DEFAULT_DEPTH_RANGE = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET = 8;

function createClothMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map: { value: null },
      opacity: { value: 1 },
      blurAmount: { value: 0 },
      scrollForce: { value: 0 },
      time: { value: 0 },
      isHovered: { value: 0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        float curveIntensity = scrollForce * 0.3;
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;
        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.02;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.015;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;
        float flagWave = 0.0;

        if (isHovered > 0.5) {
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = sin(pos.x * 3.0 + time * 8.0) * 0.1 * dampening;
          flagWave += sin(pos.x * 5.0 + time * 12.0) * 0.03 * dampening;
        }

        pos.z -= curve + clothEffect + flagWave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      uniform float scrollForce;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(map, vUv);

        if (blurAmount > 0.0) {
          vec4 blurred = vec4(0.0);
          float total = 0.0;

          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 sampleOffset = vec2(x, y) * blurAmount * 0.0018;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + sampleOffset) * weight;
              total += weight;
            }
          }

          color = blurred / total;
        }

        float curveHighlight = abs(scrollForce) * 0.005;
        color.rgb += vec3(curveHighlight);
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  });
}

function normalizeImages(images) {
  return images.map((image) => (typeof image === 'string' ? { src: image, alt: '' } : image));
}

function ImagePlane({ texture, position, scale, material }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    material.uniforms.map.value = texture;
  }, [material, texture]);

  useEffect(() => {
    material.uniforms.isHovered.value = isHovered ? 1 : 0;
  }, [isHovered, material]);

  return (
    <mesh
      position={position}
      scale={scale}
      material={material}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  );
}

function GalleryScene({
  images,
  speed = 1,
  visibleCount = 8,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.25 },
    fadeOut: { start: 0.4, end: 0.43 },
  },
  blurSettings = {
    blurIn: { start: 0, end: 0.1 },
    blurOut: { start: 0.4, end: 0.43 },
    maxBlur: 8,
  },
}) {
  const { gl } = useThree();
  const scrollVelocityRef = useRef(0);
  const autoPlayRef = useRef(true);
  const lastInteraction = useRef(Date.now());
  const normalizedImages = useMemo(() => normalizeImages(images), [images]);
  const textures = useTexture(normalizedImages.map((image) => image.src));
  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount]
  );
  const spatialPositions = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, index) => {
      const horizontalAngle = (index * 2.618) % (Math.PI * 2);
      const verticalAngle = (index * 1.618 + Math.PI / 3) % (Math.PI * 2);
      const horizontalRadius = (index % 3) * 1.2;
      const verticalRadius = ((index + 1) % 4) * 0.8;

      return {
        x: (Math.sin(horizontalAngle) * horizontalRadius * MAX_HORIZONTAL_OFFSET) / 3,
        y: (Math.cos(verticalAngle) * verticalRadius * MAX_VERTICAL_OFFSET) / 4,
      };
    });
  }, [visibleCount]);
  const totalImages = normalizedImages.length;
  const depthRange = DEFAULT_DEPTH_RANGE;
  const planesData = useRef([]);

  useEffect(() => {
    planesData.current = Array.from({ length: visibleCount }, (_, index) => ({
      index,
      z: ((depthRange / Math.max(visibleCount, 1)) * index) % depthRange,
      imageIndex: totalImages > 0 ? index % totalImages : 0,
      x: spatialPositions[index]?.x ?? 0,
      y: spatialPositions[index]?.y ?? 0,
    }));
  }, [depthRange, spatialPositions, totalImages, visibleCount]);

  const handleWheel = useCallback(
    (event) => {
      scrollVelocityRef.current += event.deltaY * 0.01 * speed;
      autoPlayRef.current = false;
      lastInteraction.current = Date.now();
    },
    [speed]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        scrollVelocityRef.current -= 2 * speed;
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        scrollVelocityRef.current += 2 * speed;
      } else {
        return;
      }

      autoPlayRef.current = false;
      lastInteraction.current = Date.now();
    },
    [speed]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      canvas.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl, handleKeyDown, handleWheel]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Date.now() - lastInteraction.current > 3000) {
        autoPlayRef.current = true;
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    if (autoPlayRef.current) {
      scrollVelocityRef.current += 0.3 * delta;
    }

    scrollVelocityRef.current *= 0.95;

    const time = state.clock.getElapsedTime();
    const imageAdvance = totalImages > 0 ? visibleCount % totalImages || totalImages : 0;
    const halfRange = depthRange / 2;

    materials.forEach((material) => {
      material.uniforms.time.value = time;
      material.uniforms.scrollForce.value = scrollVelocityRef.current;
    });

    planesData.current.forEach((plane, index) => {
      let newZ = plane.z + scrollVelocityRef.current * delta * 10;
      let wrapsForward = 0;
      let wrapsBackward = 0;

      if (newZ >= depthRange) {
        wrapsForward = Math.floor(newZ / depthRange);
        newZ -= depthRange * wrapsForward;
      } else if (newZ < 0) {
        wrapsBackward = Math.ceil(-newZ / depthRange);
        newZ += depthRange * wrapsBackward;
      }

      if (wrapsForward > 0 && imageAdvance > 0) {
        plane.imageIndex = (plane.imageIndex + wrapsForward * imageAdvance) % totalImages;
      }

      if (wrapsBackward > 0 && imageAdvance > 0) {
        const step = plane.imageIndex - wrapsBackward * imageAdvance;
        plane.imageIndex = ((step % totalImages) + totalImages) % totalImages;
      }

      plane.z = ((newZ % depthRange) + depthRange) % depthRange;
      plane.x = spatialPositions[index]?.x ?? 0;
      plane.y = spatialPositions[index]?.y ?? 0;

      const normalizedPosition = plane.z / depthRange;
      let opacity = 1;
      let blur = 0;

      if (normalizedPosition < fadeSettings.fadeIn.start) {
        opacity = 0;
      } else if (normalizedPosition <= fadeSettings.fadeIn.end) {
        opacity =
          (normalizedPosition - fadeSettings.fadeIn.start) /
          (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start);
      } else if (normalizedPosition >= fadeSettings.fadeOut.start && normalizedPosition <= fadeSettings.fadeOut.end) {
        opacity =
          1 -
          (normalizedPosition - fadeSettings.fadeOut.start) /
            (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
      } else if (normalizedPosition > fadeSettings.fadeOut.end) {
        opacity = 0;
      }

      if (normalizedPosition < blurSettings.blurIn.start) {
        blur = blurSettings.maxBlur;
      } else if (normalizedPosition <= blurSettings.blurIn.end) {
        blur =
          blurSettings.maxBlur *
          (1 -
            (normalizedPosition - blurSettings.blurIn.start) /
              (blurSettings.blurIn.end - blurSettings.blurIn.start));
      } else if (normalizedPosition >= blurSettings.blurOut.start && normalizedPosition <= blurSettings.blurOut.end) {
        blur =
          blurSettings.maxBlur *
          ((normalizedPosition - blurSettings.blurOut.start) /
            (blurSettings.blurOut.end - blurSettings.blurOut.start));
      } else if (normalizedPosition > blurSettings.blurOut.end) {
        blur = blurSettings.maxBlur;
      }

      materials[index].uniforms.opacity.value = Math.max(0, Math.min(1, opacity));
      materials[index].uniforms.blurAmount.value = Math.max(0, Math.min(blurSettings.maxBlur, blur));
      plane.worldZ = plane.z - halfRange;
    });
  });

  if (normalizedImages.length === 0) return null;

  return (
    <>
      {planesData.current.map((plane, index) => {
        const texture = textures[plane.imageIndex];
        const material = materials[index];
        const worldZ = plane.z - depthRange / 2;
        const aspect = texture?.image ? texture.image.width / texture.image.height : 1;
        const scale = aspect > 1 ? [2 * aspect, 2, 1] : [2, 2 / aspect, 1];

        if (!texture || !material) return null;

        return (
          <ImagePlane
            key={plane.index}
            texture={texture}
            position={[plane.x, plane.y, worldZ]}
            scale={scale}
            material={material}
          />
        );
      })}
    </>
  );
}

function FallbackGallery({ images }) {
  const normalizedImages = useMemo(() => normalizeImages(images), [images]);

  return (
    <div className="infinite-gallery-fallback">
      {normalizedImages.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      ))}
    </div>
  );
}

export default function InfiniteGallery({
  images,
  className = 'infinite-gallery-canvas',
  style,
  fadeSettings,
  blurSettings,
}) {
  const [webglSupported, setWebglSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(Boolean(gl));
    } catch {
      setWebglSupported(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(media.matches);
    syncPreference();
    media.addEventListener('change', syncPreference);
    return () => media.removeEventListener('change', syncPreference);
  }, []);

  if (!webglSupported || prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        <FallbackGallery images={images} />
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <Canvas camera={{ position: [0, 0, 0], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <GalleryScene images={images} fadeSettings={fadeSettings} blurSettings={blurSettings} />
      </Canvas>
    </div>
  );
}
