import { useState } from 'react';
import './MainDisplay.scss';

function MainDisplay({ setDay, setYesterday, setMonth }) {
  const [dd, setDd] = useState('main-display__header-btn--active');
  const [yd, setYd] = useState('main-display__header-btn--not-active');
  const [mm, setMm] = useState('main-display__header-btn--not-active');

  const [centralPrice, setCentralPrice] = useState('58.5%');
  const [poundPrice, setPoundPrice] = useState('10.2');
  const [unitPrice, setUnitPrice] = useState('18.5');

  function clickHandler(e) {
    if (e.target.id === 'day') {
      setDd('main-display__header-btn--active');
      setYd('main-display__header-btn--not-active');
      setMm('main-display__header-btn--not-active');
      setDay(true);
      setYesterday(false);
      setMonth(false);

      setCentralPrice('58.5%');
      setPoundPrice('10.2');
      setUnitPrice('18.5');
    } else if (e.target.id === 'yesterday') {
      setDd('main-display__header-btn--not-active');
      setYd('main-display__header-btn--active');
      setMm('main-display__header-btn--not-active');
      setDay(false);
      setYesterday(true);
      setMonth(false);

      setCentralPrice('61.3%');
      setPoundPrice('11.3');
      setUnitPrice('19.57');
    } else {
      setDd('main-display__header-btn--not-active');
      setYd('main-display__header-btn--not-active');
      setMm('main-display__header-btn--active');

      setDay(false);
      setYesterday(false);
      setMonth(true);

      setCentralPrice('53.9%');
      setPoundPrice('37.8');
      setUnitPrice('89.72');
    }
  }
  return (
    <section className="main-display">
      <div className="main-display__heading-container">
        <button
          id="day"
          onClick={e => {
            clickHandler(e);
          }}
          className={`main-display__header-btn ${dd}`}
        >
          Today
        </button>
        <button
          id="yesterday"
          onClick={e => {
            clickHandler(e);
          }}
          className={`main-display__header-btn ${yd} `}
        >
          Yesterday
        </button>
        <button
          id="month"
          onClick={e => {
            clickHandler(e);
          }}
          className={`main-display__header-btn ${mm} `}
        >
          Monthly
        </button>
      </div>
      <div className="main-display__donut-image-container">
        <div className="main-display__donut-image">
          <div className="main-display__donut-container">
            <div className="main-display__donut-text">{centralPrice}</div>
            <div className="main-display__donut-subheading">Green Energy</div>
          </div>
        </div>
      </div>
      <article>
        <div className="main-display__headings_container">
          <div className="main-display__headingss-main">Energy</div>
          <div className="main-display__headingss-cost">£</div>
          <div className="main-display__headingss-unit-price">Unit Price</div>
        </div>
        <div className="main-display__energy-parent">
          <div className="main-display__energy1">
            <div className="main-display__color-container1">
              <div>1</div>
            </div>
            <div className="main-display__color-container-text-main">
              Green Energy
            </div>
            <div className="main-display__color-container-price-text">
              {poundPrice}
            </div>
            <div className="main-display__color-container-unit-text">
              {unitPrice}
            </div>
          </div>
        </div>
        <div className="main-display__energy2">
          <div className="main-display__color-container2">
            <div>2</div>
          </div>
          <div className="main-display__color-container-text-main2">
            Fuel Energy
          </div>
          <div className="main-display__color-container-price-text2">18.5</div>
          <div className="main-display__color-container-unit-text2">10.2</div>
        </div>
      </article>
    </section>
  );
}

export default MainDisplay;
