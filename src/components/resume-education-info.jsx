import { ResumeContext } from "../App";
import { useContext } from "react";

export const ResumeEducationInfo = () => {
  const {educationInfo} = useContext(ResumeContext);
  return (
    <div className="resume-education-info">
      {educationInfo.map((education) => {
        return <div className="education" key={education.degree}>
        <p>{education?.school}</p>
        <p>{education?.degree}</p>
        <p>{education?.startDate}</p>
        <p>{education?.endDate}</p>
        <p>{education?.location}</p>
        </div>
      })}
    </div>
  )
}