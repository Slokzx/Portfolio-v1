import type { Transition, Variants } from "motion";
import { bounceEase } from "../utils/utils";

export const bounce: Transition = {
  duration: 1.2,
  ease: bounceEase,
};

export const spring: Transition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.15,
    },
  }),
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
    },
  },
};
