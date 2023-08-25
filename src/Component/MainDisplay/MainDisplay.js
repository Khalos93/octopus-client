import "./MainDisplay.scss";

function MainDisplay() {
  return (
    <section className="main-display">
      <div className="main-display__heading-container">
        <button className="main-display__header-btn">Today</button>
        <button className="main-display__header-btn">Yesterday</button>
        <button className="main-display__header-btn">Monthly</button>
      </div>
      <div className="main-display__donut-image-container">
        <div className="main-display__donut-image">
          <div className="main-display__donut-container">
            <div className="main-display__donut-text"> 58.8%</div>
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
            <div className="main-display__color-container-price-text">10.2</div>
            <div className="main-display__color-container-unit-text">18.5</div>
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
