import { EducationDetails } from "./education-details"
import { ExperienceDetails } from "./experience-details"
import { GeneralDetails } from "./general-details"

export const PersonalDetailsForms = () => {
  return (
    <div className="details-container">
      <GeneralDetails/>
      <EducationDetails/>
      <ExperienceDetails/>
    </div>
  )
}