import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-timeline">
          {educationInfo.schools.map((school, index) => (
            <div key={index} className="timeline-item">
              <EducationCard school={school} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
