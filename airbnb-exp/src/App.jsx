import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Dropdown from "./components/Dropdown.jsx";
import data from "./data.js";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* <Dropdown /> */}
    </>
  );
}

export default App;
