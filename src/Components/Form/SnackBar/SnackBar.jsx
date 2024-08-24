import "./SnackBar.css";

export default function SnackBar() {
  return (
    <div id="snackbar">
      <div
        class="icon-animated icon-animated-tick"
        tabindex="-1"
        aria-hidden="true"
      >
        <svg
          class="circle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>

        <div class="tick">
          <svg
            class="tick-leg1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 52"
          >
            <polygon class="" points="1,41 0,48 25,52 25,45" />
          </svg>
          <svg
            class="tick-leg2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 52"
          >
            <polygon class="" points="18,45 25,47 25,0 18,0" />
          </svg>
        </div>
      </div>
      <div>
      {/* Registration Successful */}
      The Backend is not longer Active. Contact the Developer for more details. diagoarden@gmail.com.
      </div>
    </div>
  );
}
