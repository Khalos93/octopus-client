import './Header.scss';

function Header({ day, yesterday, month }) {
  let leftPrice;
  let rightPrice;

  let leftRed;
  let rightRed;

  let gg;

  if (day && !yesterday && !month) {
    leftPrice = 18.26;
    rightPrice = 2.26;

    leftRed = ' 187kW(24,87%)';
    rightRed = ' £0.25(4.87%)';

    gg = 'today';
  } else if (!day && yesterday && !month) {
    leftPrice = 12.37;
    rightPrice = 3.39;

    leftRed = ' 192kW(25.98%)';
    rightRed = '£0.29(5.03%)';

    gg = 'yesterday';
  } else {
    leftPrice = 56.39;
    rightPrice = 15.89;

    leftRed = '587kW(56.39%)';
    rightRed = '£0.56(11.39%)';

    gg = 'this month';
  }

  return (
    <section className="header-section">
      <div className="header-section__container">
        <div className="header-section__wh-consumed_container">
          <div className="header-section__wh-consumed_heading">
            kWh consumed {gg}
          </div>
          <div className="header-section__wh-consumed_display-data">
            {leftPrice}
          </div>
          <div className="header-section__wh-consumed_sub-data">
            {'\u21E9'}
            {leftRed}
          </div>
        </div>
        <div className="header-section__cost-consumed_container">
          <div className="header-section__cost-consumed_heading">
            £ consumed {gg}
          </div>
          <div className="header-section__cost-consumed_display-data">
            {rightPrice}
          </div>
          <div className="header-section__cost-consumed_sub-data">
            {'\u21E9'} {rightRed}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
