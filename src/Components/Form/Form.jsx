// Css
import "../../assets/master.css";
import myCss from "./checkButton.module.css";
import "./form.css";

// Components
import Departments from "./Departments/Departments";
import SnackBar from "./SnackBar/SnackBar";

// Data
import { departmentsList } from "../../Data/GeneralData";

// React Lib
import axios from "axios";
import { Children, useEffect, useState } from "react";

export default function Form() {
  // Creating useStates for all the tags in the Form
  const [Name, setName] = useState(undefined);
  const [Phone_NO, setPhoneNo] = useState(undefined);
  const [Class_Dept, setDepartment] = useState(0);
  const [Poster_Spoofing, setPosterSpoofing] = useState(false);
  const [NFS, setNFS] = useState(false);
  const [E_Football, setEFootball] = useState(false);
  const [Idea_Presentation, setIdeaPresentation] = useState(false);
  const [Free_Fire, setFreeFire] = useState(false);
  const [BGMI, setBGMI] = useState(false);
  const [checkSubmit, setSubmit] = useState(false);

  // Participant name data Free Fire
  const [Free_Fire_Participants_2, set_Free_Fire_Participants_2] = useState();
  const [Free_Fire_Participants_3, set_Free_Fire_Participants_3] = useState();
  const [Free_Fire_Participants_4, set_Free_Fire_Participants_4] = useState();
  const [EditableStateFreeFire, setEditableStateFreeFire] = useState(false);
  const [Free_Fire_Error_Log, set_Free_Fire_Error_Log] = useState([]);
  const [Free_Fire_Team, set_Free_Fire_Team] = useState([]);

  // Participant name Idea Presentation
  const [
    Idea_Presentation_Participants_1,
    set_Idea_Presentation_Participants_1,
  ] = useState();
  const [EditableStateIdeaPresentation, setEditableStateIdeaPresentation] =
    useState(false);
  const [Idea_Presentation_Error_log, set_Idea_Presentation_Error_log] =
    useState([]);
  const [Idea_Presentation_Team, set_Idea_Presentation_Team] = useState([]);

  // participants name for BGMI
  const [BGMI_Participants_2, set_BGMI_Participants_2] = useState();
  const [BGMI_Participants_3, set_BGMI_Participants_3] = useState();
  const [BGMI_Participants_4, set_BGMI_Participants_4] = useState();
  const [EditableStateBGMI, setEditableStateBGMI] = useState(false);
  const [BGMI_Error_Log, set_BGMI_Error_Log] = useState([]);
  const [BGMI_Team, set_BGMI_Team] = useState([0]);

  // for log file
  const [errorLogs, setErrorLogs] = useState(0);

  // Functions
  function setValues(e) {
    const eventName = e.target.value;
    if (eventName === "NFS") {
      setNFS(!NFS);
    } else if (eventName == "EFootball") {
      setEFootball(!E_Football);
    } else if (eventName === "PosterSpoofing") {
      setPosterSpoofing(!Poster_Spoofing);
    } else if (eventName === "IdeaPresentation") {
      setIdeaPresentation(!Idea_Presentation);
    } else if (eventName === "FreeFire") {
      setFreeFire(!Free_Fire);
    } else if (eventName === "BGMI") {
      setBGMI(!BGMI);
    }
  }

  function checkConditionsFreeFire() {
    let log = [];
    try {
      if (
        typeof Free_Fire_Participants_2 == "undefined" ||
        typeof Free_Fire_Participants_3 == "undefined" ||
        typeof Free_Fire_Participants_4 == "undefined"
      ) {
        log.push(<span>Enter player name</span>);
      }

      if (
        Free_Fire_Participants_2.length == 0 ||
        Free_Fire_Participants_3.length == 0 ||
        Free_Fire_Participants_4.length == 0
      ) {
        log.push(<span>Enter player name</span>);
      }
    } catch {
      log.push(<span>Enter player name</span>);
    }

    if (log.length === 0) {
      setEditableStateFreeFire(!EditableStateFreeFire);
      set_Free_Fire_Team([
        Name,
        Free_Fire_Participants_2,
        Free_Fire_Participants_3,
        Free_Fire_Participants_4,
      ]);
    }
    set_Free_Fire_Error_Log(() => log);
  }

  function checkConditionsIdea_Presentation() {
    let log = [];
    try {
      if (typeof Idea_Presentation_Participants_1 == "undefined") {
        log.push(<span>Enter player name</span>);
      }

      if (Idea_Presentation_Participants_1.length == 0) {
        log.push(<span>Enter player name</span>);
      }
    } catch {
      log.push(<span>Enter player name</span>);
    }
    set_Idea_Presentation_Error_log(() => log);

    if (log.length === 0) {
      setEditableStateIdeaPresentation(!EditableStateIdeaPresentation);
      set_Idea_Presentation_Team([Name, Idea_Presentation_Participants_1]);
    }
  }

  function checkConditionsBGMI() {
    let log = [];
    try {
      if (
        typeof BGMI_Participants_2 == "undefined" ||
        typeof BGMI_Participants_3 == "undefined" ||
        typeof BGMI_Participants_4 == "undefined"
      ) {
        log.push(<span>Enter player name</span>);
      }

      if (
        BGMI_Participants_2.length == 0 ||
        BGMI_Participants_3.length == 0 ||
        BGMI_Participants_4.length == 0
      ) {
        log.push(<span>Enter player name</span>);
      }
    } catch {
      log.push(<span>Enter player name</span>);
    }

    set_BGMI_Error_Log(() => log);

    if (log.length === 0) {
      setEditableStateBGMI(!EditableStateBGMI);
      set_BGMI_Team([
        Name,
        BGMI_Participants_2,
        BGMI_Participants_3,
        BGMI_Participants_4,
      ]);
    }
  }

  function checkConditions(e) {
    let log = [];
    const noOfDigits = 10;

    // Name
    try {
      if (Name.length !== 0) {
      }
    } catch {
      log.push(<span>Please enter you're name</span>);
    }

    // Phone No
    try {
      if (Phone_NO.length < 10) {
        log.push(
          <span>
            Invalid Phone Number: Has only {Phone_NO.length} and is missing{" "}
            {noOfDigits - Phone_NO.length}
          </span>
        );
      }
      if (isNaN(Phone_NO)) {
        log.push(<span>Invalid Phone Number</span>);
      }
      if (Phone_NO.length > 10) {
        log.push(
          <span>
            Invalid Phone Number: Has extra numbers{" "}
            {Phone_NO.length - noOfDigits}
          </span>
        );
      }
    } catch {
      log.push(<span>Enter your Phone Number</span>);
    }

    // Department
    if (Class_Dept === 0) {
      log.push(<span>Select your Department</span>);
    }
    // Check Events
    if (Free_Fire) {
      if (Free_Fire_Team.length !== 4) {
        log.push(<span>Add Team Members name for Free Fire</span>);
      }
      if (!EditableStateFreeFire) {
        log.push(<span>Click on the save button for Free Fire</span>);
      }
    }
    if (BGMI) {
      if (BGMI_Team.length !== 4) {
        log.push(<span>Add Team Members name for BGMI</span>);
      }
      if (!EditableStateBGMI) {
        log.push(<span>Click on the save button for BGMI</span>);
      }
    }
    if (Idea_Presentation) {
      if (Idea_Presentation_Team.length !== 2) {
        log.push(<span>Add Team Members name for Idea Presentation</span>);
      }
      if (!EditableStateIdeaPresentation) {
        log.push(<span>Click on the save button for Idea Presentation</span>);
      }
    }

    setErrorLogs(() => log);

    // Database
    if (errorLogs.length === 0) {
      // axios.post(
      //   `https://sheet.best/api/sheets/4c28782e-bb0e-4980-ab1a-a0583769b4b1`,
      //   {
      //     Name,
      //     Phone_NO,
      //     Class_Dept,
      //     Poster_Spoofing,
      //     NFS,
      //     Idea_Presentation,
      //     Free_Fire,
      //     BGMI,
      //     Free_Fire_Team,
      //     Idea_Presentation_Team,
      //     BGMI_Team,
      //     E_Football,
      //   }
      // No More in Use
      // );
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
        window.location.reload(window.location.href + "#form_section");
      }, 5000);
    }
  }
  // Members
  // react component
  return (
    <section
      id="form_section"
      className="checkout-area pt-130 pb-130 event-list-margin"
    >
      <div className="container center-grid mb-100">
        <div className="row g-4">
          <div id="myForm" className="checkout__item-left sub-bg">
            <div>
              <div>
                <h3 className="mb-40">Registration Form</h3>
                <input
                  className="mb-20"
                  id="Name"
                  required
                  type="text"
                  value={Name}
                  placeholder="Enter you Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  className="mb-20"
                  id="Phone_NO"
                  required
                  type="tel"
                  placeholder="Enter you Phone No"
                  value={Phone_NO}
                  onChange={(e) => setPhoneNo(e.target.value)}
                ></input>
                {/* Class */}
                <div>
                  <select
                    className="mb-20 btn-group size"
                    name="subject"
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {departmentsList.map((department) => (
                      <Departments
                        key={department.indexValue}
                        {...department}
                      />
                    ))}
                  </select>
                </div>

                {/* button for events */}
                <div className="checkout__item-left sub-bg main-grid-form">
                  {/* Single Event Button */}
                  <div className="form_border">
                    <label className="mb-10" htmlFor="companyName">
                      Individual Events
                    </label>
                    <div className="btn-wrp-form">
                      {/*  */}
                      {/*  */}
                      {/* my Final thought  */}
                      {/* NFS */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="NFS"
                            value="NFS"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">NFS</div>
                      </div>
                      {/* E Football */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="NFS"
                            value="EFootball"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">E Football</div>
                      </div>
                      {/* Poster Spoofing */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="PosterSpoofing"
                            value="PosterSpoofing"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">Poster Spoofing</div>
                      </div>

                      {/*  */}
                      {/*  */}
                      {/*  */}
                    </div>
                  </div>

                  {/* Group */}
                  <div className="form_border">
                    <label className="mb-10" htmlFor="companyName">
                      Group Events
                    </label>
                    <div className="btn-wrp-form">
                      {/*  */}
                      {/*  */}
                      {/* my Final thought  */}
                      {/* Idea Presentation */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="IdeaPresentation"
                            value="IdeaPresentation"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">Idea Presentation</div>
                      </div>

                      {/* Free fire */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="FreeFire"
                            value="FreeFire"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">Free Fire</div>
                      </div>

                      {/* BGMI */}
                      <div className="form-row">
                        <div className={myCss.switch}>
                          <input
                            type="checkbox"
                            id="BGMI"
                            value="BGMI"
                            onChange={(e) => setValues(e)}
                          ></input>
                          <label htmlFor="toggle">
                            <i className={myCss.bulb}>
                              <span className={myCss.bulbCenter}></span>
                              <span className={myCss.filament1}></span>
                              <span className={myCss.filament2}></span>
                              <span className={myCss.reflections}>
                                <span></span>
                              </span>
                              <span className={myCss.sparks}>
                                <i className={myCss.spark1}></i>
                                <i className={myCss.spark2}></i>
                                <i className={myCss.spark3}></i>
                                <i className={myCss.spark4}></i>
                              </span>
                            </i>
                          </label>
                        </div>
                        <div className="form-row">BGMI</div>
                      </div>

                      {/*  */}
                      {/*  */}
                      {/*  */}
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}

                  {/* Free Fire */}
                  {Free_Fire && (
                    <div className="form_border">
                      <label className="mb-10" htmlFor="companyName">
                        Free Fire Participants Names
                      </label>
                      <div className="btn-wrp-form width-increase">
                        <div className="two-wrp">
                          {/* 1 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={true}
                            value={Name}
                            placeholder=""
                          ></input>
                          {/* 2 */}
                          <input
                            className="mb-20"
                            id="Free_Fire_Participants_2"
                            required
                            type="text"
                            disabled={EditableStateFreeFire}
                            value={Free_Fire_Participants_2}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_Free_Fire_Participants_2(e.target.value)
                            }
                          ></input>
                          {/* 3 */}
                          <input
                            className="mb-20"
                            id="Free_Fire_Participants_3"
                            required
                            type="text"
                            disabled={EditableStateFreeFire}
                            value={Free_Fire_Participants_3}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_Free_Fire_Participants_3(e.target.value)
                            }
                          ></input>
                          {/* 4 */}
                          <input
                            className="mb-20"
                            id="Free_Fire_Participants_4"
                            required
                            type="text"
                            disabled={EditableStateFreeFire}
                            value={Free_Fire_Participants_4}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_Free_Fire_Participants_4(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="btn-align-row submitRight">
                        <div className="align-btn">
                          <button
                            className="btn-one"
                            onClick={() => {
                              checkConditionsFreeFire();
                            }}
                          >
                            <span>
                              {EditableStateFreeFire ? "Edit" : "Save"}
                            </span>
                          </button>
                          <div className="errorLog">
                            {Free_Fire_Error_Log[0]}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Idea Presentation */}
                  {Idea_Presentation && (
                    <div className="form_border">
                      <label className="mb-10" htmlFor="companyName">
                        Idea Presentation Participants Names
                      </label>
                      <div className="btn-wrp-form width-increase">
                        <div className="two-wrp">
                          {/* 1 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={true}
                            value={Name}
                            placeholder=""
                          ></input>
                          {/* 2 */}
                          <input
                            className="mb-20"
                            id="Free_Fire_Participants_2"
                            required
                            type="text"
                            disabled={EditableStateIdeaPresentation}
                            value={Idea_Presentation_Participants_1}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_Idea_Presentation_Participants_1(
                                e.target.value
                              )
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="btn-align-row submitRight">
                        <div className="align-btn">
                          <button
                            className="btn-one"
                            onClick={() => {
                              checkConditionsIdea_Presentation();
                            }}
                          >
                            <span>
                              {EditableStateIdeaPresentation ? "Edit" : "Save"}
                            </span>
                          </button>
                          <div className="errorLog">
                            {Idea_Presentation_Error_log[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* BGMI */}
                  {BGMI && (
                    <div className="form_border">
                      <label className="mb-10" htmlFor="companyName">
                        BGMI Participants Names
                      </label>
                      <div className="btn-wrp-form width-increase">
                        <div className="two-wrp">
                          {/* 1 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={true}
                            value={Name}
                            placeholder=""
                          ></input>
                          {/* 2 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={EditableStateBGMI}
                            value={BGMI_Participants_2}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_BGMI_Participants_2(e.target.value)
                            }
                          ></input>
                          {/* 3 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={EditableStateBGMI}
                            value={BGMI_Participants_3}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_BGMI_Participants_3(e.target.value)
                            }
                          ></input>
                          {/* 4 */}
                          <input
                            className="mb-20"
                            required
                            type="text"
                            disabled={EditableStateBGMI}
                            value={BGMI_Participants_4}
                            placeholder="Members Name"
                            onChange={(e) =>
                              set_BGMI_Participants_4(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="btn-align-row submitRight">
                        <div className="align-btn">
                          <button
                            className="btn-one"
                            onClick={() => {
                              checkConditionsBGMI();
                            }}
                          >
                            <span>{EditableStateBGMI ? "Edit" : "Save"}</span>
                          </button>
                          <div className="errorLog">{BGMI_Error_Log[0]}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Error Log */}
                <div className="submit-div">
                  <div className="errorLogSubmit">
                    {errorLogs.length > 0 && errorLogs.map((err) => err)}
                  </div>
                  {/* Submit Button */}
                  <div className="btn-align-row submitRight">
                    <button
                      className="btn-one-light btn-size"
                      onClick={(e) => checkConditions(e)}
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {checkSubmit && (
        <div className="container center-grid">
          <div className="btn-wrp-form">
            <SnackBar />
          </div>
        </div>
      )}
    </section>
  );
}
