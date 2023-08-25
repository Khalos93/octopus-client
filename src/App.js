import "./App.scss";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <>
      <div className="header-component"></div>
      <div className="main-display"></div>
      <div className="fancy-buttons"></div>
      <div className="impossible-graph"></div>
      <div className="nav-bar">
        <Nav />
      </div>
    </>
  );
}

export default App;
