'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  countTo: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ countTo, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // triggers only once when in view

  useEffect(() => {
    if (!isInView) return; // start the animation only when in view

    let animationFrame: number;
    const duration = 2; // animation duration in seconds
    const startTime = performance.now();

    const animateCount = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const currentCount = Math.floor(progress * countTo);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, countTo]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-primary"
      >
        {count}+
      </motion.h2>
      <p className="text-xl">{label}</p>
    </motion.div>
  );
};

export default Counter;
