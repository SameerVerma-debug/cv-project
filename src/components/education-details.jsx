import { useRef, useState, useContext } from "react";
import { ResumeContext } from "../App";
import "../styles/form.css";

export const EducationDetails = () => {
  const [expand, setExpand] = useState(false);
  const { educationInfo, setEducationInfo } = useContext(ResumeContext);

  const schoolInput = useRef();
  const degreeInput = useRef();
  const startDateInput = useRef();
  const endDateInput = useRef();
  const locationInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationInfo([
      ...educationInfo,
      {
        school: schoolInput.current.value,
        degree: degreeInput.current.value,
        startDate: startDateInput.current.value,
        endDate: endDateInput.current.value,
        location: locationInput.current.value,
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
        <h2>Education Details</h2>
        <button onClick={handleExpandClick}>
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>

      {expand && (
        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label htmlFor="school">School</label>
            <input
              id="school"
              ref={schoolInput}
              type="text"
              placeholder="Enter School/University"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              ref={degreeInput}
              type="text"
              placeholder="Enter Degree"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              placeholder="Enter Start Date"
              ref={startDateInput}
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              ref={endDateInput}
              type="text"
              placeholder="Enter end-date"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              ref={locationInput}
              type="text"
              placeholder="Enter Location"
            />
          </div>

          <button id="submit">Submit</button>
        </form>
      )}

      <div>
      {educationInfo.map((education) => {
        return <h2>{education.school}</h2>
      })}
      </div>
    </div>
  );
};
