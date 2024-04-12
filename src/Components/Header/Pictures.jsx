// The top most part for the pictures

// Components
import Divide from "../General/Divide";

// Data
import { photosLinks } from "../../Data/GeneralData";
// Css
import "../../assets/master.css";
import logo from "../../assets/img/logo/dep.png";

export default function Pictures() {
  return (
    <>
      {/* <div className="container"> */}
      <div className=" my-wrap">
        <div className="naver">
          <a href="index.html" className="main__logo">
            <img src={logo} alt="logo__image"></img>
          </a>
          {/* Each Logo For each college id */}
          <div className="account__wrap">
            {photosLinks.map((logo) => (
              <Divide key={logo.key} {...logo} />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
