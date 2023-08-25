import './FancyButton.scss';

function FancyButton({ rightButton, leftButton }) {
  return (
    <div className="button-container">
      <button className={` button button--left`}>{leftButton}</button>
      <button className={`button button--right`}>{rightButton}</button>
    </div>
  );
}

export default FancyButton;
