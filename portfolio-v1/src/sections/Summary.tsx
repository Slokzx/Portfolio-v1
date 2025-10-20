import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  containerVariants,
  itemVariants,
  sectionReveal,
} from "../constants/transitions";
import "../styles/Summary.css";
import { data } from "../constants/data";

const summaryData = data.summary;
const summarySections = [
  {
    id: "name",
    content: (
      <div className="flex gap-4">
        <p className="hero-emoji">✍️</p>
        <h1 className="summary-title">{summaryData.title}</h1>
      </div>
    ),
  },
  {
    id: "bio",
    content: (
      <div>
        {summaryData.description.length > 0 &&
          summaryData.description.map((desc, inx) => (
            <p key={inx} className="summary-description">
              {desc}
            </p>
          ))}
      </div>
    ),
  },
];

const Summary = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <motion.section
      id="summary"
      className="summary-section"
      variants={sectionReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={sectionRef}
    >
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {summarySections.map(({ id, content }, index) => (
          <motion.div
            key={id}
            className="hero-item"
            variants={itemVariants}
            custom={index}
          >
            {content}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Summary;
