// React Lib
import { useState, useRef, useEffect } from "react";

// Data
import { team } from "../../Data/GeneralData";

// Css
import "../../assets/master.css";

// Components
import UpdatePhoto from "./UpdatePhoto";
import DisplayMembers from "./DisplayMembers";



export default function OurTeam() {
  const [index, setIndex] = useState(0);
  const noOfMembers = team.length;
  const delay = 3000;
  const timeoutRef = useRef();

  // Reset Timer
  function resetTimeOut() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  // Set Timer
  useEffect(() => {
    resetTimeOut();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((priviousIndex) =>
          priviousIndex === noOfMembers - 1 ? 0 : priviousIndex + 1
        ),
      delay,
      delay
    );
  });

  return (
    <section className="get-now-area pt-130 pb-130 pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 pt-0">
            <div className="section-header d-flex align-items-center wow fadeInUp btn-align-row">
              <span className="title-icon mr-10"></span>
              <h1 className="co-fonts">Co Ordinators</h1>
            </div>
            {<DisplayMembers {...team[index]} />}
          </div>
          {<UpdatePhoto {...team[index]} />}
        </div>
      </div>
    </section>
  );
}
