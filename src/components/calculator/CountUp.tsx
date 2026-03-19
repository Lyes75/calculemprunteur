"use client";

import { useEffect, useRef, useState } from "react";
import { formatEuro } from "./utils";

interface CountUpProps {
  target: number;
  duration?: number;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUp({ target, duration = 1500 }: CountUpProps) {
  const [current, setCurrent] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = null;
    setCurrent(0);

    function animate(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCurrent(Math.round(easedProgress * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return <>{formatEuro(current)}</>;
}
