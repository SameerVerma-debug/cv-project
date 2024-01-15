import { ResumeContext } from "../App";
import { useContext } from "react";

export const ResumeExperienceInfo = () => {
  const { experienceInfo } = useContext(ResumeContext);
  return (
    <div className="resume-experience-info">
      <h2>Experience</h2>
      {experienceInfo.map((experience) => {
        return (
          <div className="experience" key={experience.id}>
            <div className="date-location-container">
              <p>
                {experience?.startDate} - {experience?.endDate}
              </p>
              <p>{experience?.location}</p>
            </div>

            <div className="job-description-container">
              <p>{experience?.company}</p>
              <p>{experience?.position}</p>
              <p>{experience?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
