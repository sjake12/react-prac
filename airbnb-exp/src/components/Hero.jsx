import "../App.css";
import heroImage from "/assets/hero.png";

function Hero() {
  return (
    <header className="hero">
      <img src={heroImage} alt="hero image" className="hero--img" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </header>
  );
}

export default Hero;
