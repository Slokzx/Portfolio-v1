"use client";

import { frame, motion, useSpring } from "motion/react";
import { useEffect, useRef, type RefObject } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

const spring = { damping: 10, stiffness: 75, restDelta: 0.001 };

// eslint-disable-next-line react-refresh/only-export-components
export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 420,
  height: 420,
  position: "fixed" as const,
  top: 0,
  left: 0,
  borderRadius: "50%",
  pointerEvents: "none" as const,
  zIndex: 5,
  background:
    "radial-gradient(circle,   rgba(0, 128, 255, 0.24) 0%, rgba(0, 128, 255, 0.12) 35%, rgba(15, 25, 47, 0) 70%)",
  mixBlendMode: "screen" as const,
  filter: "blur(30px)",
  opacity: 0.5,
};
