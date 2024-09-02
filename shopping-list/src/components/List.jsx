import { useState } from "react";
import Order from "./Order";
import Item from "./Item";
import data from "../data";

function List() {
  const [subTotal, setSubTotal] = useState(0);
  const [itemTotals, setItemTotals] = useState({});

  const handleItemTotalChange = (index, totalPrice) => {
    setItemTotals((prevTotals) => {
      const newTotals = { ...prevTotals, [index]: totalPrice };
      const newSubTotal = Object.values(newTotals).reduce(
        (acc, price) => acc + price,
        0
      );
      setSubTotal(newSubTotal);
      return newTotals;
    });
  };

  const items = data.map((item, index) => {
    const { name, price, imgURL } = item;

    return (
      <li key={index}>
        <Item
          name={name}
          price={price}
          image={imgURL}
          onTotalPriceChange={(totalPrice) =>
            handleItemTotalChange(index, totalPrice)
          }
        />
      </li>
    );
  });

  return (
    <>
      <div className="list">
        <div className="list-header">
          <h1 className="list-title">Your product list</h1>
          <h2 className="items-qty">
            <span className="qty">{items.length}</span>Items
          </h2>
        </div>
        <div className="list-items">
          <ul>{items}</ul>
        </div>
      </div>
      <Order subTotal={subTotal} />
    </>
  );
}

export default List;
