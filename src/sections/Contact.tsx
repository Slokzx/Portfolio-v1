import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Button from "../components/Button";
import "../styles/Contact.css";
import Input from "../components/Input";
import { sectionReveal } from "../constants/transitions";
import { data } from "../constants/data";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const nameEmailRef = useRef<HTMLInputElement>(null);
  const nameMessageRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  const [status, setStatus] = useState("");
  const successMessage = data.contact.successMessage;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(successMessage.loading);
    const form = { name, email, message };

    const res = await fetch(data.contact.formAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setStatus(successMessage.success);
    } else {
      setStatus(successMessage.error);
    }
  };

  useEffect(() => {
    if (status === successMessage.success) {
      setTimeout(() => {
        setStatus("");
      }, 10000);
    }
  }, [status, successMessage.success]);

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="contact-section mt-[10rem]"
      variants={sectionReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="message-title">
        <h1 className="send-message">{data.contact.title}</h1>
        <h3 className="send-message-subtitle">{data.contact.subtitle}</h3>
      </div>

      <div className="message-input">
        <div className="form-row grid gap-8 md:grid-cols-2">
          <Input
            id="name"
            type="text"
            ref={nameRef}
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            section="name"
            label="Your Name"
          />
          <Input
            id="email"
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
              placeholder={data.contact.messagePlaceholder}
            />
          </div>
        </div>
        <div className="success-message">
          <span>{status}</span>
        </div>
      </div>

      <div className="message-button">
        <Button
          size="xl"
          type="submit"
          variant="primary"
          onClick={handleSubmit}
        >
          {data.contact.buttonText}
        </Button>
      </div>
    </motion.section>
  );
};
export default Contact;
