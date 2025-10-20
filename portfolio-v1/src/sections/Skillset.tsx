import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SmallCard from "../components/SmallCard";
import {
  containerVariants,
  itemVariants,
  sectionReveal,
} from "../constants/transitions";
import "../styles/Skillset.css";
import { data } from "../constants/data";

const Skillset = () => {
  const skills = data.skills;
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <motion.section
      id="skills"
      className="skillset-section"
      ref={sectionRef}
      variants={sectionReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="skills-title flex gap-6">
        <p className="hero-emoji">👨‍💻</p>
        <h1 className="skills-title">My Skillsets</h1>
      </div>
      <motion.div
        className="mb-50 grid grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills?.map((skill, inx) => (
          <motion.div key={skill.heading} variants={itemVariants} custom={inx}>
            <SmallCard
              heading={skill.heading}
              logo={skill.logo}
              description={skill.description}
              highlight={inx === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skillset;
