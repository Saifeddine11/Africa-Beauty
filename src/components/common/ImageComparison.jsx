import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = 'Before',
  altAfter = 'After',
  beforeLabel = 'Avant',
  afterLabel = 'Apres',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0, locked: false });

  const updateFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  }, []);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging) return;
      updateFromClientX(clientX);
    },
    [isDragging, updateFromClientX]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, locked: false };
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
    touchStartRef.current.locked = false;
  };
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const start = touchStartRef.current;
    const dx = Math.abs(touch.clientX - start.x);
    const dy = Math.abs(touch.clientY - start.y);

    if (!start.locked && dy > dx) return;

    start.locked = true;
    setIsDragging(true);
    updateFromClientX(touch.clientX);
  };
  const handleContainerClick = (e) => updateFromClientX(e.clientX);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 2));
    }
    if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 2));
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseUp, handleTouchEnd]);

  return (
    <div
      ref={containerRef}
      className="ba-compare"
      role="slider"
      aria-label="Comparaison avant apres"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
    >
      <img src={beforeImage} alt={altBefore} className="ba-compare-image ba-compare-image-before" draggable="false" />

      <div
        className="ba-compare-panel ba-compare-after"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transition: isDragging ? 'none' : 'clip-path 180ms ease-out',
        }}
      >
        <img src={afterImage} alt={altAfter} className="ba-compare-image ba-compare-image-after" draggable="false" />
      </div>

      <span className="ba-compare-label ba-compare-label-before">{beforeLabel}</span>
      <span className="ba-compare-label ba-compare-label-after">{afterLabel}</span>

      <div
        className="ba-compare-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`ba-compare-knob ${isDragging ? 'is-dragging' : ''}`}>
          <MoveHorizontal size={18} />
        </div>
      </div>
    </div>
  );
};
