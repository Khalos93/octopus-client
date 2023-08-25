import './FancyButton.scss';

function FancyButton({ rightButton, leftButton }) {
  return (
    <div className="button-container">
      <button className={`left-button button`}>{leftButton}</button>
      <button className={`right-button`}>{rightButton}</button>
    </div>
  );
}

export default FancyButton;
