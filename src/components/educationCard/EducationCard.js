import React, {useState, useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  // State to manage accordion expansion
  const [isExpanded, setIsExpanded] = useState(false);
  const {isDark} = useContext(StyleContext);

  // Function to toggle expansion
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Handle key events for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleExpand();
    }
  };

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => <li key={i}>{item}</li>)
      : null;
  };

  if (!school.logo)
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );

  // Main card container with dynamic classes for dark mode and expansion state
  return (
    <div
      className={`education-card ${isDark ? "education-card-dark" : ""} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {/* Header section - clickable to toggle */}
      <div
        className="education-header"
        role="button"
        tabIndex="0"
        aria-expanded={isExpanded}
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
      >
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
          <h5 className="education-text-school">{school.schoolName}</h5>
          {/* Sub Header / Degree */}
          <h6 className="education-text-subHeader">{school.subHeader}</h6>
          {/* Duration */}
          <span className="education-text-duration">{school.duration}</span>
        </div>
        {/* Toggle Arrow Indicator, always right arrow rotated via CSS */}
        <span className="education-toggle-arrow">▶</span>
      </div>

      {/* Body section - conditionally rendered */}
      {isExpanded && (
        <div className="education-body">
          <p className="education-text-desc">{school.desc}</p>
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
