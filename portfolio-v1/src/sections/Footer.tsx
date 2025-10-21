import { data } from "../constants/data";
import "../styles/Footer.css";

const Footer = () => (
  <div className="footer m-auto max-w-md pb-8 text-sm">
    <span>{data.footer}</span>
  </div>
);

export default Footer;
