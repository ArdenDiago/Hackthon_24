import Pictures from "./Pictures";
import Navigation from "./Navigation";
import deplog from "../../assets/img/logo/dep.svg";
export default function Headers() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <img src={deplog} alt="" />
          {/* <img src={deplog}></img> */}
        </div>
      </nav>
    </>
  );
}
