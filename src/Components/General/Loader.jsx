// Css
import "../../assets/master.css";
import "../../assets/master.js";

export default function Loader() {
  // paceOptions = {
	// 	ajax: true,
	// 	document: true,
	// 	eventLag: false,
	// };

	// Pace.on("done", function () {
	// 	$("#preloader").addClass("isdone");
	// 	$(".loading").addClass("isdone");
	// });
  return (
    <>
      <div className="loading">
        <span className="text-capitalize">L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div id="preloader"></div>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

    </>
  );
}
