import { cn } from "../../lib/utils";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  lineMarkerSize = 6,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="12 7 176 86"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.5"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
        markerEnd="url(#cpu-circle-marker)"
      >
        {/* 1st */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 10 20 h 74 q 5 0 5 5 v 18"
        />
        {/* 2nd */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 190 10 h -82 q -5 0 -5 5 v 26"
        />
        {/* 3rd */}
        <path d="M 126 10 v 28 q 0 5 -5 5 h -11" />
        {/* 4th */}
        <path d="M 188 74 h -66 q -5 0 -5 -5 v -8" />
        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 172 94 h -64 q -5 0 -5 -5 v -23"
        />
        {/* 6th */}
        <path d="M 96 96 v -38" />
        {/* 7th */}
        <path d="M 12 86 h 73 q 5 0 5 -5 v -23" />
        {/* 8th */}
        <path d="M 8 32 h 77 q 5 0 5 5 v 8" />
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Light orbs travelling along each path */}
      <g mask="url(#cpu-mask-1)">
        <circle className="cpu-architecture cpu-line-1" cx="0" cy="0" r="8" fill="url(#cpu-blue-grad)" />
      </g>
      <g mask="url(#cpu-mask-2)">
        <circle className="cpu-architecture cpu-line-2" cx="0" cy="0" r="8" fill="url(#cpu-yellow-grad)" />
      </g>
      <g mask="url(#cpu-mask-3)">
        <circle className="cpu-architecture cpu-line-3" cx="0" cy="0" r="8" fill="url(#cpu-pinkish-grad)" />
      </g>
      <g mask="url(#cpu-mask-4)">
        <circle className="cpu-architecture cpu-line-4" cx="0" cy="0" r="8" fill="url(#cpu-white-grad)" />
      </g>
      <g mask="url(#cpu-mask-5)">
        <circle className="cpu-architecture cpu-line-5" cx="0" cy="0" r="8" fill="url(#cpu-green-grad)" />
      </g>
      <g mask="url(#cpu-mask-6)">
        <circle className="cpu-architecture cpu-line-6" cx="0" cy="0" r="8" fill="url(#cpu-orange-grad)" />
      </g>
      <g mask="url(#cpu-mask-7)">
        <circle className="cpu-architecture cpu-line-7" cx="0" cy="0" r="8" fill="url(#cpu-cyan-grad)" />
      </g>
      <g mask="url(#cpu-mask-8)">
        <circle className="cpu-architecture cpu-line-8" cx="0" cy="0" r="8" fill="url(#cpu-rose-grad)" />
      </g>

      {/* Center image */}
      <g>
        <rect x="84.5" y="39.5" width="31" height="21" rx="2.5" fill="none" filter="url(#cpu-light-shadow)" />
        <image
          href="/images/africa-beauty-illustration.webp"
          x="58"
          y="16"
          width="84"
          height="63"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <defs>
        {/* Masks */}
        <mask id="cpu-mask-1"><path d="M 10 20 h 74 q 5 0 5 5 v 18" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-2"><path d="M 190 10 h -82 q -5 0 -5 5 v 26" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-3"><path d="M 126 10 v 28 q 0 5 -5 5 h -11" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-4"><path d="M 188 74 h -66 q -5 0 -5 -5 v -8" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-5"><path d="M 172 94 h -64 q -5 0 -5 -5 v -23" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-6"><path d="M 96 96 v -38" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-7"><path d="M 12 86 h 73 q 5 0 5 -5 v -23" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-8"><path d="M 8 32 h 77 q 5 0 5 5 v 8" strokeWidth="0.5" stroke="white" /></mask>

        {/* Gradients */}
        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#00E8ED" />
          <stop offset="50%" stopColor="#08F" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFD800" />
          <stop offset="50%" stopColor="#FFD800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#830CD1" />
          <stop offset="50%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter id="cpu-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.1" />
        </filter>
        <marker id="cpu-circle-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth={lineMarkerSize} markerHeight={lineMarkerSize}>
          <circle id="innerMarkerCircle" cx="5" cy="5" r="2" fill="black">
            {animateMarkers && <animate attributeName="r" values="0; 3; 2" dur="0.5s" />}
          </circle>
        </marker>

        <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

      </defs>
    </svg>
  );
};

export { CpuArchitecture };
