import { motion, useInView } from "framer-motion";
import { useRef, useState, type ChangeEvent } from "react";
import Button from "../components/Button";
import "../styles/Contact.css";
import Input from "../components/Input";
import { sectionReveal } from "../constants/transitions";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const nameEmailRef = useRef<HTMLInputElement>(null);
  const nameMessageRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const handleChange = (e: ChangeEvent, section: string) => {
    e.preventDefault();
    switch (section) {
      case "name":
        if (nameRef.current) {
          setName(nameRef.current.value || "");
        }
        break;
      case "email":
        if (nameEmailRef.current) {
          setEmail(nameEmailRef.current.value || "");
        }
        break;
      case "message":
        if (nameMessageRef.current) {
          setMessage(nameMessageRef.current.value || "");
        }
    }
  };

  const handleSubmit = () => {
    console.log(name, email, message);
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="contact-section"
      variants={sectionReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="message-title">
        <h1 className="send-message">Send me a message!</h1>
        <h3 className="send-message-subtitle">
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </h3>
      </div>

      <div className="message-input">
        <div className="form-row grid grid-cols-2 gap-8">
          <Input
            type="text"
            ref={nameRef}
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            section="name"
            label="Your Name"
          />
          <Input
            type="text"
            ref={nameEmailRef}
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
            section="email"
            label="Email Address"
          />
        </div>
        <div className="w-full">
          <div className="form-textarea grid-row-2 grid h-[120px] gap-2 p-1">
            <label className="input-label">Your Message</label>
            <textarea
              value={message}
              ref={nameMessageRef}
              onChange={(e) => handleChange(e, "message")}
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            />
          </div>
        </div>
      </div>

      <div className="message-button">
        <Button
          size="xl"
          type="submit"
          variant="primary"
          onClick={() => handleSubmit}
        >
          Shoot
        </Button>
      </div>
    </motion.section>
  );
};
export default Contact;
