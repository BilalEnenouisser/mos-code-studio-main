import { useEffect, useState, useCallback } from "react";

interface ParallaxOptions {
  speed?: number; // 0.1 = slow, 1 = normal scroll speed
  direction?: "up" | "down";
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = "up" } = options;
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const multiplier = direction === "up" ? -1 : 1;
    setOffset(scrollY * speed * multiplier);
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return offset;
};

interface ElementParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useElementParallax = (options: ElementParallaxOptions = {}) => {
  const { speed = 0.3, direction = "up" } = options;
  const [transform, setTransform] = useState({ y: 0, opacity: 1 });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const multiplier = direction === "up" ? -1 : 1;
    const y = scrollY * speed * multiplier;
    const opacity = Math.max(0, 1 - scrollY / 800);
    setTransform({ y, opacity });
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return transform;
};

export const useMouseParallax = (intensity: number = 0.02) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (e.clientX - centerX) * intensity;
    const y = (e.clientY - centerY) * intensity;
    setPosition({ x, y });
  }, [intensity]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return position;
};
