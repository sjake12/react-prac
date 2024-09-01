import { useState, useRef, useEffect } from "react";
import "../App.css";

function Item({ name, price, image }) {
  const [qty, setQty] = useState(1);

  function handleAdd() {
    setQty((q) => q + 1);
  }

  function handleReduce() {
    if (qty === 1) return;
    setQty((q) => q - 1);
  }

  return (
    <div className="item">
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="item-details">
        <div className="item-header">
          <p className="name">{name}</p>
          <span className="remove">X</span>
        </div>
        <div className="total">
          <div className="qty">
            <button className="reduce" onClick={handleReduce}>
              -
            </button>
            <p>{qty}</p>
            <button className="add" onClick={handleAdd}>
              +
            </button>
          </div>
          <p className="price">
            $ <span className="total-price">{price * qty}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
