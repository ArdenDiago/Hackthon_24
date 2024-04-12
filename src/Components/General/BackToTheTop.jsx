// Css
import "../../assets/master.css";

// useState
import { useState } from "react";

export default function BackToTheTop() {
  const [goToTop, setTop] = useState(false);

  return (
    <>
      <div className="scroll-up">
        <button>
          <svg
            className="scroll-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>hi
        </button>
      </div>
    </>
  );
}
