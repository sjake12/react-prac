import { useState } from "react";
import Item from "./Item";
import data from "../data";

function List() {
  const items = data.map((item, index) => {
    const { name, price, imgURL } = item;

    return (
      <li key={index}>
        <Item name={name} price={price} image={imgURL} />
      </li>
    );
  });
  return (
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
  );
}

export default List;
