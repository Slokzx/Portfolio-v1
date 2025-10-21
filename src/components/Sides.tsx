import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "../styles/Sides.css";

interface SideProps {
  children: ReactNode;
  isHome?: boolean;
  orientation?: "left" | "right";
}

const sideVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const LOADER_DELAY = 0.6;

const Side = ({ children, isHome = true, orientation = "left" }: SideProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const transition = {
    duration: 0.6,
    ease: "easeOut" as const,
    delay: isHome ? LOADER_DELAY : 0,
  };

  const className = `side side--${orientation}`;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={isHome ? "hidden" : "visible"}
      animate="visible"
      variants={sideVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Side;
