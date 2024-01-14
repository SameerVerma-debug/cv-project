import { ResumeEducationInfo } from "./resume-education-info"
import { ResumeExperienceInfo } from "./resume-experience-info"
import { ResumeGeneralInfo } from "./resume-general-info"
import "../styles/resume.css";
export const ResumeTemplate = () => {
  return (
    <div className="resume-template">
      <ResumeGeneralInfo/>
      <ResumeEducationInfo/>
      <ResumeExperienceInfo/>
    </div>
  )
}