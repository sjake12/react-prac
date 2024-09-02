import { useState, useRef, useEffect } from "react";
import "../App.css";

function Item({ name, price, image, onTotalPriceChange }) {
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    const newTotalPrice = price * qty;
    setTotalPrice(newTotalPrice);

    onTotalPriceChange(newTotalPrice);
  }, [qty, price, onTotalPriceChange]);

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
            $ <span className="total-price">{totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
