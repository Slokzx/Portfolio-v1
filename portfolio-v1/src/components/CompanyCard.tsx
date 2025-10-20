import clsx from "clsx";
import Button from "./Button";
import "../styles/CompanyCard.css";

export type CompanyLink = {
  label: string;
  href: string;
};

export type CompanyCardProps = {
  timeline: { startYear: string; endYear: string };
  companyName: string;
  title: string;
  subtitle?: string;
  description: string;
  skills: string[];
  links?: CompanyLink[];
  highlight?: boolean;
};

const CompanyCard = ({
  timeline,
  companyName,
  title,
  subtitle,
  description,
  skills,
  links = [],
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
            {companyName}
          </h3>
          {subtitle && (
            <p className="company-card__subtitle" aria-label="Role">
              {subtitle}
            </p>
          )}
        </header>

        <p className="company-card__description">{description}</p>

        {links.length > 0 && (
          <ul className="company-card__links">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

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
