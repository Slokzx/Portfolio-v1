import clsx from "clsx";
import Button from "./Button";
import "../styles/CompanyCard.css";

export type CompanyCardProps = {
  timeline: { startYear: string; endYear: string };
  companyName: string;
  title: string;
  subtitle?: string;
  description: string;
  skills: string[];
  href?: string;
  highlight?: boolean;
};

const CompanyCard = ({
  timeline,
  companyName,
  title,
  subtitle,
  description,
  skills,
  href,
  highlight = false,
}: CompanyCardProps) => {
  const periodLabel = `${timeline.startYear} — ${timeline.endYear}`;

  return (
    <article
      className={clsx("company-card", { "company-card--highlight": highlight })}
    >
      <div className="company-card__timeline">
        <span className="company-card__period">{periodLabel}</span>
      </div>

      <div className="company-card__body">
        <header className="company-card__header">
          <h3 className="company-card__title">
            {title}
            <span className="company-card__dot">·</span>
            <a href={href} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          </h3>
          {subtitle && (
            <p className="company-card__subtitle" aria-label="Role">
              {subtitle}
            </p>
          )}
        </header>

        <p className="company-card__description">{description}</p>
        <div className="company-card__skills">
          {skills.map((skill) => (
            <Button
              key={skill}
              variant="pill"
              size="pill"
              className="company-card__skill-pill"
              onClick={() => {}}
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
