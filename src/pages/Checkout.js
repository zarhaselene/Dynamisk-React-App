import React from "react";
import { useCart, useDispatch } from "../components/Cart";
import { Link } from 'react-router-dom'
import '../styles/Checkout.css'

const CartItem = ({ product, index, removeBtnHandle }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><img src={product.url} className="" alt="" width='100' height='100' /></td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td> <button onClick={() => removeBtnHandle(index)}>x</button></td>
          </tr>
        </tbody>
      </table>

    </>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatch();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const removeBtnHandle = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const buy = (index) => {
    dispatch({ type: "CLEARALL", index });
  }

  if (items.length === 0) {
    return (
      <main>
        <h1>Checkout</h1>
        <p>Cart is empty</p>
        <p>
          Total Price:{" "}
          ${totalPrice}
        </p>
        <div>
        <button className="checkout-continue">
        <Link to="/products">Continue shopping</Link>
        </button>        
        </div>
      </main>
    );
  }
  return (
    <>

      {items.map((item, index) => (
        <CartItem
          removeBtnHandle={removeBtnHandle}
          key={index}
          product={item}
          index={index}
        />
      ))}
      <p>
        Total Price:{" "}
        ${totalPrice}
      </p>
      <br />
      <div>
        <Link to="/confirmationpage"><button className="buy-btn" onClick={buy}>Buy</button></Link>

          
        <button className="checkout-continue">
        <Link to="/products">Continue shopping</Link>
        </button>
      </div>
      <br />
    </>
  );
}
