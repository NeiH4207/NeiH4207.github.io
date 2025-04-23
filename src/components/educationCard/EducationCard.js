import React, { useState, useContext } from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  // State to manage accordion expansion
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDark } = useContext(StyleContext);

  // Function to toggle expansion
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          // Apply dark mode to list items if needed
          <li key={i} className={isDark ? "dark-mode" : ""}>
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.schoolName} is missing in education section`);

  // Main card container with dynamic classes for dark mode and expansion state
  return (
    <div
      className={`education-card ${isDark ? "education-card-dark" : ""} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {/* Header section - clickable to toggle */}
      <div className="education-header" onClick={toggleExpand}>
        {school.logo && (
          <img
            crossOrigin={"anonymous"}
            className="education-logo"
            src={school.logo}
            alt={school.schoolName}
          />
        )}
        <div className="education-header-text">
          {/* School Name */}
          <h5 className={`education-text-school ${isDark ? "dark-mode" : ""}`}>
            {school.schoolName}
          </h5>
          {/* Sub Header / Degree */}
          <h6
            className={`education-text-subHeader ${isDark ? "dark-mode" : ""}`}
          >
            {school.subHeader}
          </h6>
          {/* Duration */}
          <span
            className={`education-text-duration ${isDark ? "dark-mode" : ""}`}
          >
            {school.duration}
          </span>
        </div>
        {/* Toggle Arrow Indicator */}
        <span className="education-toggle-arrow">
          {isExpanded ? "▼" : "▶"}
        </span>
      </div>

      {/* Body section - conditionally rendered */}
      {isExpanded && (
        <div className="education-body">
          <p className={`education-text-desc ${isDark ? "dark-mode" : ""}`}>
            {school.desc}
          </p>
          <div className="education-text-bullets">
            <ul>
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
