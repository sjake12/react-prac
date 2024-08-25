import reactlogo from "../assets/reactjs-icon.png";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={reactlogo} className="logo-img" />
        <h2>ReactFacts</h2>
      </div>
      <h3>React Course -Project 1</h3>
    </nav>
  );
}

export default Navbar;
