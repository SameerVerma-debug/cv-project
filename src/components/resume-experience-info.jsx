import { ResumeContext } from "../App";
import { useContext } from "react";

export const ResumeExperienceInfo = () => {
  const {experienceInfo} = useContext(ResumeContext);
  return (
    <div className="resume-experience-info">
      {experienceInfo.map((experience) => {
        return <div className="experience" key={experience.position}>
        <p>{experience?.company}</p>
        <p>{experience?.position}</p>
        <p>{experience?.startDate}</p>
        <p>{experience?.endDate}</p>
        <p>{experience?.location}</p>
        <p>{experience?.description}</p>
        </div>
      })}
    </div>
  )
}