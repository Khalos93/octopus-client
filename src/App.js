import './App.scss';
import FancyButton from './Component/FancyButtons/FancyButton';
import Header from './Component/Header/Header';
import MainDisplay from './Component/MainDisplay/MainDisplay';
import Nav from './Component/Nav/Nav';
import Octopus from './Component/Octopus/Octopus';
import Chart from './Component/Chart/Chart';
import { useState } from 'react';

function App() {
  const [day, setDay] = useState(true);
  const [yesterday, setYesterday] = useState(false);
  const [month, setMonth] = useState(false);

  return (
    <div className="app">
      <div className="app__title-container">
        <h1 className="app__heading">Usage</h1>
      </div>
      <div className="app__header-component">
        <Header day={day} yesterday={yesterday} month={month} />
      </div>
      <div className="app__main-display">
        <MainDisplay
          setDay={setDay}
          setYesterday={setYesterday}
          setMonth={setMonth}
        />
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
