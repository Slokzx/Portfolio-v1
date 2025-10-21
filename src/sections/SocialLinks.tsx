import Side from "../components/Sides";
import Icon from "../components/Icons";
import "../styles/SocialLinks.css";
import { data } from "../constants/data";

const socialMedia = data.socialMedia;

const SocialLinks = () => {
  return (
    <>
      <Side>
        <ul className="social-icons">
          {socialMedia.map(({ url, name }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </Side>

      <div className="mobile-social-bar">
        <a
          className="mobile-social-bar__email"
          href={`mailto:${data.email}`}
        >
          {data.email}
        </a>
        <ul className="mobile-social-bar__icons">
          {socialMedia.map(({ url, name }) => (
            <li key={`mobile-${name}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
