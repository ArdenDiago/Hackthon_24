// Css
import "../../assets/master.css";

// Logo
import fire from "../../assets/icons/fire.svg";
import bg1 from "../../assets/img/team/get-bg.png";
import bg2 from "../../assets/img/team/get-image.png";
import bg3 from "../../assets/img/team/get-image2.png";

// icon
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";


export default function UpdatePhoto({ image }) {
  return (
    <div className="col-xl-6">
      <div className="get-now__image mt-5 mt-xl-0">
        <div className="get-bg-image">
          <img src={bg1} alt="image"></img>
        </div>
        <div className="swiper get__slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image">
                <img src={image} alt="image"></img>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <img src={bg3} alt="image"></img>
              </div>
            </div>
          </div>
        </div>
        <button className="get-now-arry get-now__arry-left">
          <button>
            <img src={leftArrow} className="arrow"></img>
          </button>
        </button>
        <button className="get-now-arry get-now__arry-right text-warning">
          <button>
            <img src={rightArrow} className="arrow"></img>
          </button>
        </button>
      </div>
    </div>
  );
}
