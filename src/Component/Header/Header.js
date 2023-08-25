import "./Header.scss";

function Header() {
  return (
    <section className="header-section">
      <div className="header-section__container">
        <div className="header-section__wh-consumed_container">
          <div className="header-section__wh-consumed_heading">
            Wh consumed today
          </div>
          <div className="header-section__wh-consumed_display-data">1826</div>
          <div className="header-section__wh-consumed_sub-data">
            {"\u21E9"}
            {" 187Kw(24,87%)"}
          </div>
        </div>
        <div className="header-section__cost-consumed_container">
          <div className="header-section__cost-consumed_heading">
            £ consumed today
          </div>
          <div className="header-section__cost-consumed_display-data">2.26</div>
          <div className="header-section__cost-consumed_sub-data">
            {"\u21E9"} {" £0.25(4.87%)"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
