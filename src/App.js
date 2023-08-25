import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <div className="header-component">
        <Header />
      </div>
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
