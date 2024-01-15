import { useRef, useState } from "react";
import { useContext } from "react";
import { ResumeContext } from "../App";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "../styles/form.css";

export const GeneralDetails = () => {
  const [expand, setExpand] = useState(false);
  const { setGeneralInfo } = useContext(ResumeContext);

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const addressInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo({
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      address: addressInput.current.value,
    });
    setExpand(false);
    e.target.reset();
  };

  const handleExpandClick = () => {
    setExpand(!expand);
  };
  return (
    <div className="heading-form-container">
      <div className="header">
        <h2>General Information</h2>
        <button className="expand-button" onClick={handleExpandClick}>
          {expand ? <FaAngleUp/> : <FaAngleDown/>}
        </button>
      </div>

      {expand && (
        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label htmlFor="fullname">Full Name*</label>
            <input
              id="fullname"
              ref={nameInput}
              type="text"
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              ref={emailInput}
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="phone-number">Phone Number*</label>
            <input
              id="phone-number"
              type="text"
              placeholder="Enter Phone Number"
              ref={phoneInput}
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="address">Address*</label>
            <input
              id="address"
              type="text"
              ref={addressInput}
              placeholder="Enter Address"
              required
            />
          </div>

          <button id="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
