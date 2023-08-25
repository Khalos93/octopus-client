import "./Nav.scss";
import octopus from "../../Assets/icons/icon-octopus.svg";
import lightning from "../../Assets/icons/icon-lightning.svg";
import wallet from "../../Assets/icons/icon-wallet.svg";

function Nav() {
  return (
    <>
      <div className="nav-bar">
        <div className="button__home">
          <button className="btn-home">
            <span className="hover"></span>
            <img className="img-octopus" src={octopus} alt="octopus icon" />
            Home
          </button>
        </div>
        <div className="button__usage">
          <button className="btn-usage">
            <span className="hover"></span>
            <img className="img-lightning" src={lightning} alt="octopus icon" />
            Usage
          </button>
        </div>
        <div className="button__bills">
          <button className="btn-bills">
            <span className="hover"></span>
            <img className="img-wallet" src={wallet} alt="octopus icon" />
            Bills
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
