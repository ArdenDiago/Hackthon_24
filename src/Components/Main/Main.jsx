// Components
import MainLoader from "../General/MainLoader";
import Slider from "../General/Slider";

// React Lib
import { useState, useRef, useEffect } from "react";

// Data
import { images, sliderInfo } from "../../Data/GeneralData";

// Css
import "../../assets/master.css";

export default function Main() {
  const [index, setIndex] = useState(1);
  const lengthOfDataSet = sliderInfo.length;
  const delay = 5000;
  const timeoutRef = useRef();

  // Clearing the call from the stack
  function resetTimeOut() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // setting the timer
  useEffect(() => {
    resetTimeOut();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((previousIndex) =>
          previousIndex === lengthOfDataSet - 1 ? 0 : previousIndex + 1
        ),
      delay
    );
  });

  return (
    <main>
      <section className="banner-two">
        {/* Import images */}
        {/* {images.map((i) => ( */}
        {/* // <MainLoader key={i.t2} {...i} /> */}
        {/* // ))} */}
        {/* Background */}
        <div className="swiper banner-two__slider back_color">
          {<Slider key={sliderInfo[index].key} {...sliderInfo[index]} />}
        </div>
      </section>
    </main>
  );
}
