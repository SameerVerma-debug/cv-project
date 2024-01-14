import { ResumeContext } from "../App";
import { useContext } from "react";

export const ResumeGeneralInfo = () => {
  const {generalInfo} = useContext(ResumeContext);
  return (
    <div className="resume-general-info">
      <p>{generalInfo?.name}</p>
      <p>{generalInfo?.email}</p>
      <p>{generalInfo?.phone}</p>
      <p>{generalInfo?.address}</p>
    </div>
  )
}