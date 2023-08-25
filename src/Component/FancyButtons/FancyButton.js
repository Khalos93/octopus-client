import { useState } from 'react';
import './FancyButton.scss';

function FancyButton() {
  const [leftLeftActive, setActive] = useState('button--active');
  const [leftRightActive, setNotActive] = useState('button--not-active');

  const [rightLeftActive, setRightLeftActive] = useState('button--active');
  const [rightRightActive, setRightRightActive] =
    useState('button--not-active');

  function leftClickHandler() {
    if (leftLeftActive === 'button--active') {
      setActive('button--not-active');
      setNotActive('button--active');
    } else {
      setActive('button--active');
      setNotActive('button--not-active');
    }
  }

  function rightClickHandler() {
    if (rightLeftActive === 'button--active') {
      setRightLeftActive('button--not-active');
      setRightRightActive('button--active');
    } else {
      setRightLeftActive('button--active');
      setRightRightActive('button--not-active');
    }
  }
  return (
    <section className="wrapper-to-flex">
      <div className="button-container button-container--left">
        <button
          onClick={leftClickHandler}
          className={` button ${leftLeftActive}`}
        >
          Electric
        </button>
        <button
          onClick={leftClickHandler}
          className={`button ${leftRightActive}`}
        >
          Gas
        </button>
      </div>
      <div className="button-container button-container--right">
        <button
          onClick={rightClickHandler}
          className={` button ${rightLeftActive}`}
        >
          Kwh
        </button>
        <button
          onClick={rightClickHandler}
          className={`button ${rightRightActive}`}
        >
          £
        </button>
      </div>
    </section>
  );
}

export default FancyButton;
