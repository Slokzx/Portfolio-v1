import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CompanyCard from "../components/CompanyCard";
import {
  containerVariants,
  itemVariants,
  sectionReveal,
} from "../constants/transitions";
import { data } from "../constants/data";

const Work = () => {
  const companies = data.companies;
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <motion.section
      id="work"
      ref={sectionRef}
      className="work-section"
      variants={sectionReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-6"
      >
        {companies.map((company, inx) => (
          <motion.div
            key={company.companyName}
            variants={itemVariants}
            custom={inx}
          >
            <CompanyCard
              timeline={company.timeline}
              companyName={company.companyName}
              title={company.title}
              description={company.description}
              skills={company.skills}
              highlight={inx === 0}
              href={company.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Work;
