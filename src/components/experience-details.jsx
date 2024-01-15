import { useRef, useState, useContext } from "react";
import { ResumeContext } from "../App";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "../styles/form.css";

export const ExperienceDetails = () => {
  const [expand, setExpand] = useState(false);
  const { experienceInfo, setExperienceInfo } = useContext(ResumeContext);

  const companyInput = useRef();
  const positionInput = useRef();
  const startDateInput = useRef();
  const endDateInput = useRef();
  const locationInput = useRef();
  const descriptionInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceInfo([
      ...experienceInfo,
      {
        id:
          experienceInfo.length == 0
            ? 1
            : experienceInfo[experienceInfo.length - 1].id + 1,
        company: companyInput.current.value,
        position: positionInput.current.value,
        startDate: startDateInput.current.value,
        endDate: endDateInput.current.value,
        location: locationInput.current.value,
        description: descriptionInput.current.value,
      },
    ]);
    setExpand(false);
    e.target.reset();
  };

  const handleExpandClick = () => {
    setExpand(!expand);
  };
  return (
    <div className="heading-form-container">
      <div className="header">
        <h2>Experience Details</h2>
        <button className="expand-button" onClick={handleExpandClick}>
        {expand ? <FaAngleUp/> : <FaAngleDown/>}
        </button>
      </div>

      <div>
        {experienceInfo.map((experience) => {
          return (
            <h3 className="company-name" key={experience.id}>
              {experience.company}
            </h3>
          );
        })}
      </div>

      {expand && (
        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label htmlFor="company-name">Company Name*</label>
            <input
              id="company-name"
              type="text"
              ref={companyInput}
              placeholder="Enter Company Name"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="position-title">Position Title*</label>
            <input
              id="position-title"
              type="text"
              ref={positionInput}
              placeholder="Enter Position Title"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="start-date">Start Date*</label>
            <input
              id="start-date"
              type="text"
              placeholder="Enter Start Date"
              ref={startDateInput}
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="end-date">End Date*</label>
            <input
              id="end-date"
              type="text"
              ref={endDateInput}
              placeholder="Enter end-date"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="location">Location*</label>
            <input
              id="location"
              type="text"
              ref={locationInput}
              placeholder="Enter Location"
              required
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              ref={descriptionInput}
              placeholder="Enter Description"
            />
          </div>

          <button id="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
