import clsx from "clsx";
import "../styles/SmallCard.css";
import Icon from "./Icons";

export type SmallCardProps = {
  heading: string;
  description: string;
  logo: string[];
  highlight?: boolean;
};

const SmallCard = ({
  heading,
  logo,
  description,
  highlight = false,
}: SmallCardProps) => {
  return (
    <article
      className={clsx("small-card h-full", {
        "small-card--highlight": highlight,
      })}
    >
      <div className="small-card__body">
        <header className="small-card__header">
          <h3 className="small-card__title">{heading}</h3>
        </header>
        <p className="small-card__description">{description}</p>

        <div className="small-card__logos">
          {logo?.map((logoName, index) => (
            <div
              key={index}
              className="small-card__logo-wrapper"
              data-tooltip={logoName}
            >
              <Icon name={logoName} className="small-card__logo" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SmallCard;
