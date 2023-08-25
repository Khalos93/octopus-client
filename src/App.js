import "./App.scss";
import FancyButton from "./Component/FancyButtons/FancyButton";
import Header from "./Component/Header/Header";
import MainDisplay from "./Component/MainDisplay/MainDisplay";
import Nav from "./Component/Nav/Nav";
import Octopus from "./Component/Octopus/Octopus";
import Chart from "./Component/Chart/Chart";

function App() {
  return (
    <div className="app">
      <div className="app__header-component">
        <Header />
      </div>
      <div className="app__main-display">
        <MainDisplay />
      </div>
      <div className="app__fancy-buttons">
        <FancyButton />
      </div>
      <div className="app__impossible-graph">
        <Chart />
      </div>
      <div className="octopus">
        <Octopus />
      </div>
      <div className="app__nav-bar">
        <Nav />
      </div>
    </div>
  );
}

export default App;
