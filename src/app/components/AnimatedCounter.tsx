import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  isInView: boolean;
}

export function AnimatedCounter({ value, duration = 2, isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  
  // Extract number from value (e.g., "30+" -> 30)
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = numericValue;
    const increment = end / (duration * 60); // 60 fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
}
