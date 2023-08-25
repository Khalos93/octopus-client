import "./Chart.scss";
import mainChart from "../../Assets/icons/Frame-chart.svg";

function Chart() {
  return (
    <section className="chart-section">
      <div className="chart-section__chart-container">
        <img
          src={mainChart}
          alt="chart displayed"
          className="chart-section__chart-image"
        />
      </div>
    </section>
  );
}

export default Chart;
