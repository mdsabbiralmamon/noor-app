import React from 'react';

// Circular Progress Component
type CircularProgressProps = {
  percentage: number;
  label: string;
  circleColor?: string;
  textColor?: string;
  lineCap?: 'butt' | 'round' | 'square';  
};

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
  circleColor = "text-blue-500",  // Default circle color
  textColor = "text-blue-600",    // Default text color
  lineCap = "round",              // Default to round stroke line cap
}) => {
  const radius = 80; // Circle radius
  const circumference = 2 * Math.PI * radius; // Circumference formula
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="280"  // Adjusted width
        height="280" // Adjusted height
        className="relative"
      >
        {/* Background Circle with Disabled Color (lower opacity) */}
        <circle
          className={`${circleColor}`}
          strokeWidth="30"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="140" // Center of the larger SVG
          cy="140" // Center of the larger SVG
          style={{
            strokeOpacity: 0.2,  // Making it lighter
          }}
        />
        {/* Dynamic Progress Circle */}
        <circle
          className={circleColor}
          strokeWidth="30"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap={lineCap}  // Apply the lineCap from props
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="140"
          cy="140"
          style={{
            transition: 'stroke-dashoffset 0.35s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
        {/* Percentage Text in the Center */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={`text-4xl font-bold ${textColor}`} 
        >
          {percentage}%
        </text>
      </svg>
      {/* Label Below the Progress Circle */}
      <p className={`mt-4 text-2xl font-semibold ${textColor}`}>{label}</p>  
    </div>
  );
};

export default CircularProgress;
