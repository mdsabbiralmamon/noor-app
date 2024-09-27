'use client';

import React, { useState, useEffect, useRef } from 'react';

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
  const [animatedPercentage, setAnimatedPercentage] = useState(0); // Animated percentage state
  const radius = 80; // Circle radius
  const circumference = 2 * Math.PI * radius; // Circumference formula
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;
  const circleRef = useRef<HTMLDivElement | null>(null); // Ref to observe when the component is in view
  const observer = useRef<IntersectionObserver | null>(null);

  // Animates the percentage from 0 to the given percentage when in view
  useEffect(() => {
    const animatePercentage = () => {
      let start = 0;
      const end = percentage;
      const duration = 2000; // Animation duration in milliseconds
      const increment = end / (duration / 30); // Incremental steps

      const animate = () => {
        start += increment;
        if (start >= end) {
          start = end;
          setAnimatedPercentage(end);
        } else {
          setAnimatedPercentage(start);
          requestAnimationFrame(animate); // Continue animating until the end value
        }
      };

      animate();
    };

    // Set up IntersectionObserver to detect when the circular progress comes into view
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePercentage(); // Trigger animation when in view
          observer.current?.disconnect(); // Stop observing after the animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (circleRef.current) {
      observer.current.observe(circleRef.current); // Start observing
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect(); // Cleanup the observer
      }
    };
  }, [percentage]);

  return (
    <div className="flex flex-col items-center" ref={circleRef}>
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
          {Math.floor(animatedPercentage)}% {/* Rounded percentage */}
        </text>
      </svg>
      {/* Label Below the Progress Circle */}
      <p className={`mt-4 text-2xl font-semibold ${textColor}`}>{label}</p>  
    </div>
  );
};

export default CircularProgress;
