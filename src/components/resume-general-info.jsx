import { ResumeContext } from "../App";
import { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

export const ResumeGeneralInfo = () => {
  const { generalInfo } = useContext(ResumeContext);
  return (
    <div className="resume-general-info">
      <h1>{generalInfo?.name}</h1>

      <div className="contact-info">
        <div className="icon-info-container">
          <MdEmail />
          <p>{generalInfo?.email}</p>
        </div>

        <div className="icon-info-container">
          <FaPhoneAlt />
          <p>{generalInfo?.phone}</p>
        </div>

        <div className="icon-info-container">
          <FaAddressCard />
          <p>{generalInfo?.address}</p>
        </div>
      </div>
    </div>
  );
};
