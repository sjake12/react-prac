import Promo from "./Promo";

function Order({ subTotal }) {
  const tax = 6.88;
  const shipping = 0.0;
  return (
    <div className="flex">
      <div className="order">
        <h1>Order Summary</h1>
        <div className="summary">
          <div className="sub-total">
            <p>Subtotal</p>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="tax">
            <p>Tax</p>
            <span>$6.88</span>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <span>$0.00</span>
          </div>
          <div className="line"></div>
          <div className="total">
            <h2>Total</h2>
            <span>${(subTotal + tax + shipping).toFixed(2)}</span>
          </div>
          <button className="btn">Pay now</button>
        </div>
      </div>
      <Promo />
    </div>
  );
}

export default Order;
