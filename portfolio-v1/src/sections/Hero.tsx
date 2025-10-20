import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/Hero.css";
import heroPortrait from "../assets/Slok_Shah_2.png";
import { containerVariants, itemVariants } from "../constants/transitions";
import { data } from "../constants/data";
import Button from "../components/Button";

const heroData = data.hero;

const handleDownload = () => {
  const linkElement = document.createElement("a");
  linkElement.href = heroData.downloadLink;
  linkElement.download = heroData.fileName;
  linkElement.click();
};
const heroSections = [
  {
    id: "intro",
    content: (
      <div className="mb-5 flex items-center gap-6">
        <p className="hero-emoji">👋</p>
        <p className="hero-kicker">{heroData.intro}</p>
      </div>
    ),
  },
  {
    id: "name",
    content: <h1 className="hero-title">{heroData.name}</h1>,
  },
  {
    id: "tagline",
    content: <h2 className="hero-subtitle">{heroData.tagline}</h2>,
  },
  {
    id: "bio",
    content: <p className="hero-description">{heroData.bio}</p>,
  },
  {
    id: "cta",
    content: (
      <Button
        size="xl"
        type="submit"
        variant="primary"
        onClick={() => handleDownload()}
      >
        {heroData.downloadButton}
      </Button>
    ),
  },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <motion.section
      id="hero"
      className="hero-section mt-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={sectionRef}
    >
      <motion.div className="hero-content" variants={containerVariants}>
        {heroSections.map(({ id, content }, index) => (
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
      <motion.div
        className="hero-image"
        variants={itemVariants}
        custom={heroSections.length}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <img
          src={heroPortrait}
          alt="Slok Shah"
          className="hero-image__img"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
