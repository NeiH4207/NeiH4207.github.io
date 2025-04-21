import React, {useState} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${isDark ? "experience-card-dark" : "experience-card"} ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
      <div className="experience-header">
        <img className="experience-logo" src={cardInfo.companylogo} alt={cardInfo.company} />
        <div className="experience-header-text">
          <h5 className={isDark ? "experience-role dark-mode-text" : "experience-role"}>
            {cardInfo.role}
          </h5>
          <h6 className={isDark ? "experience-company dark-mode-text" : "experience-company"}>
            {cardInfo.company}
          </h6>
          <span className={isDark ? "experience-date dark-mode-text" : "experience-date"}>
            {cardInfo.date}
          </span>
        </div>
        <span className="experience-toggle-arrow">
          {expanded ? "▼" : "▶"}
        </span>
      </div>
      {expanded && (
        <div className="experience-body">
          <p className={isDark ? "experience-desc dark-mode-text" : "experience-desc"}>
            {cardInfo.desc}
          </p>
          <ul className="experience-bullets">
            {cardInfo.descBullets?.map((item, idx) => (
              <li key={idx} className={isDark ? "experience-bullet dark-mode-text" : "experience-bullet"}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
