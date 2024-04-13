// Css
import "../../assets/master.css";

// Install this tom
// npm install react-transition-group/Transition  --save
// import { CSSTransition } from "react-transition-group";

// img icon
import fire from "../../assets/icons/fire.svg";

export default function Slider({
  parentCSS,
  backGround,
  detailsLink,
  formLink,
  eventName,
  text,
  overlayer,
}) {
  return (
    <>
      <script src="../../assets/master.js"></script>
      <div className={overlayer}>
        <div className={parentCSS}>
          {/* data-background={backGround} */}
          <div className="slide-bg">
            <img className="background-slider" src={backGround} alt="" />
          </div>
          <div className="container">
            <div className="banner-two__content">
              {/* Join fast */}
              <h1 data-animation="fadeInUp" data-delay="3.3s">
                Find everything <br></br>
                for{" "}
                <span className="primary-color smooth_trans">{eventName}</span>
              </h1>
              <p className="mt-40" data-animation="fadeInUp" data-delay="1.5s">
               {text}
              </p>
            </div>

            {/* Buttons */}
            <div className="btn-wrp mt-65 btn-align-col">
              <div className="btn-align-row">
                <a
                  href='#form_section'
                  className="btn-one"
                  data-animation="fadeInUp"
                  data-delay="1.8s"
                >
                  <span>Register Now</span>
                </a>
              </div>

              <div className="btn-align-row">
                <a
                  className="btn-one-light"
                  href={detailsLink}
                  data-animation="fadeInUp"
                  data-delay="1.9s"
                >
                  <span>Online Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
