import React, {useState} from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle expansion
  const toggleExpand = () => setExpanded(!expanded);

  // Handle key events for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleExpand();
    }
  };

  return (
    <div
      className={`${isDark ? "experience-card-dark" : "experience-card"} ${
        expanded ? "expanded" : ""
      }`}
    >
      <div
        className="experience-header"
        role="button"
        tabIndex="0"
        aria-expanded={expanded}
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
      >
        <img
          className="experience-logo"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
        <div className="experience-header-text">
          <h5 className="experience-role">{cardInfo.role}</h5>
          <h6 className="experience-company">{cardInfo.company}</h6>
          <span className="experience-date">{cardInfo.date}</span>
        </div>
        {/* Toggle Arrow Indicator, always right arrow rotated via CSS */}
        <span className="experience-toggle-arrow">▶</span>
      </div>
      {expanded && (
        <div className="experience-body">
          <p className="experience-desc">{cardInfo.desc}</p>
          <ul className="experience-bullets">
            {cardInfo.descBullets?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
