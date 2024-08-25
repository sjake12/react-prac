import "../App.css";
import star from "../assets/star.png";
import katieZ from "../assets/katie-zaferes.png";

function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={katieZ} alt="Card image" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span> {props.stats.rating.toFixed(1)}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
