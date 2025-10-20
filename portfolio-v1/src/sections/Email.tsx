import Side from "../components/Sides";
import "../styles/Email.css";
import { data } from "../constants/data";

const EmailLink = () => (
  <div>
    <Side orientation="right">
      <div className="vertical-text">{data.email}</div>
    </Side>
  </div>
);

export default EmailLink;
