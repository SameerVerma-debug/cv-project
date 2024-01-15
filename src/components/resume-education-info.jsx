import { ResumeContext } from "../App";
import { useContext } from "react";

export const ResumeEducationInfo = () => {
  const { educationInfo } = useContext(ResumeContext);
  return (
    <div className="resume-education-info">
      <h2>Education</h2>
      {educationInfo.map((education) => {
        return (
          <div className="education" key={education.id}>
            <div className="date-location-container">
              <p>{education?.startDate} - {education?.endDate}</p>
              <p>{education?.location}</p>
            </div>

            <div className="school-degree-container">
              <p style={{fontWeight:"bold"}}>{education?.school}</p>
              <p>{education?.degree}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
