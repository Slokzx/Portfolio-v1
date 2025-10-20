// import { Link } from "react-scroll";
import Icon from "../components/Icons";
// import { motion } from "framer-motion";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { bounce, spring } from "../constants/transitions";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/NavBar.css";
// const sections = ["hero", "projects", "about", "contact"];

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full justify-end backdrop-blur-sm"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto flex max-w-[90%] items-center justify-between px-6 py-4 text-[var(--color-text)]">
        {/* <Logo className="h-12 w-12 flex-shrink-0 drop-shadow-sm" /> */}

        <Icon name="Logo" />
        {/* <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-[var(--color-mutedText)] transition-colors hover:text-[var(--color-accent)]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul> */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
