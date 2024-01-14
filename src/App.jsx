import { PersonalDetailsForms } from "./components/personal-details-forms";
import { createContext, useContext, useState } from "react";
import { ResumeTemplate } from "./components/resume-template";
import "./styles/app.css"

export const ResumeContext = createContext();

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  return (
    <ResumeContext.Provider
      value={{
        generalInfo,
        setGeneralInfo,
        educationInfo,
        setEducationInfo,
        experienceInfo,
        setExperienceInfo,
      }}
    >
      <h1 style={{textAlign:"center"}}>Resume Maker</h1>
      <div className="container">
        <PersonalDetailsForms />
        <ResumeTemplate/>
      </div>
    </ResumeContext.Provider>
  );
}

export default App;
