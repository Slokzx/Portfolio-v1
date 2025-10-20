import { AnimatePresence, motion, type Variants } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import "../styles/ThemeToggle.css";

const trackVariants: Variants = {
  light: {
    backgroundColor: "rgba(15, 98, 254, 0.3)",
    borderColor: "rgba(15, 98, 254, 0.6)",
  },
  dark: {
    backgroundColor: "rgba(15, 98, 254, 0.3)",
    borderColor: "rgba(15, 98, 254, 0.6)",
  },
};

const thumbVariants: Variants = {
  light: {
    x: 2,
    backgroundColor: "var(--color-primary)",
    color: "#f7f9ff",
  },
  dark: {
    x: 28,
    backgroundColor: "var(--color-accent)",
    color: "var(--color-background)",
  },
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const variantKey = isDark ? "dark" : "light";

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="theme-toggle__track"
        variants={trackVariants}
        animate={variantKey}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <motion.span
        className="theme-toggle__thumb"
        variants={thumbVariants}
        animate={variantKey}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <FaMoon />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
            >
              <FaSun />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <span className="theme-toggle__icon theme-toggle__icon--sun">
        <FaSun />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon">
        <FaMoon />
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
