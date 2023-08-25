import octopus from "../../Assets/images/octopus.svg";
import "./Octopus.scss";

function Octopus() {
  return (
    <>
      <div className="octopus-wrapper">
        <img src={octopus} alt="octopus img" className="octopus__img" />
      </div>
      <div className="octopus__text">Notify me at green moments!</div>
      <div className="octopus__button"></div>
    </>
  );
}
export default Octopus;
