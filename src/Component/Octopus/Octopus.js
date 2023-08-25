import octopus from "../../Assets/images/octopus.svg";
import "./Octopus.scss";
import { useState } from "react";

function Octopus() {
  const [leftActive, setLeftActive] = useState("button--active");
  const [rightActive, setRightActive] = useState("button--not-active");

  function leftClickHandler() {
    if (leftActive === "button--active") {
      setLeftActive("button--not-active");
      setRightActive("button--active");
    } else {
      setLeftActive("button--active");
      setRightActive("button--not-active");
    }
  }

  function rightClickHandler() {
    if (rightActive === "button--active") {
      setLeftActive("button--active");
      setRightActive("button--not-active");
    } else {
      setLeftActive("button--not-active");
      setRightActive("button--active");
    }
  }

  return (
    <>
      <div className="octopus-wrapper">
        <img src={octopus} alt="octopus img" className="octopus__img" />
      </div>
      <div className="octopus__text">Notify me at green moments!</div>

      <div className="octopus__button-container">
        <button onClick={leftClickHandler} className={` button ${leftActive}`}>
          Yes
        </button>
        <button onClick={rightClickHandler} className={`button ${rightActive}`}>
          No
        </button>
      </div>
    </>
  );
}
export default Octopus;
