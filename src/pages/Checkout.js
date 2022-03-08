import React from "react";
import { useCart, useDispatch } from "../components/Cart";
import { Link } from 'react-router-dom'
import Trash from '../images/trash.svg'
import '../styles/Checkout.css'

const CartItem = ({ product, index, removeBtnHandle }) => {
  return (

    <div className="position">
      <table className="checkout-product">
        <tbody className="checkout-product-detail">
          <tr>
            <td><img className="cart-product-image" src={product.url} alt="" /></td>

            <td className="checkout-product-title">
              <b>Product: </b>
              {product.title}
            </td>

            <td className="checkout-product-id">
              <b>ID: </b>
              {product.id}
            </td>

            <td>
              <div className="checkout-product-price">${product.price}</div>
            </td>

            <td>
              <button className="remove-product" onClick={() => removeBtnHandle(index)}>
                <img src={Trash} alt="" />
              </button>
            </td>

          </tr>
        </tbody>
      </table>

    </div>

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
        <div>
          <h1 className="checkout-page-title">Checkout</h1>
        </div>
        <p className="cart-empty">Cart is empty</p>;
        <div className="btn-checkout-empty">
          <div>
            <button className="checkout-continue">
              <Link to="/products">Continue shopping</Link>
            </button>
          </div>
        </div>
      </main>
    );
  }
  return (
    <>
      <div>
        <h1 className="checkout-page-title">Checkout</h1>
      </div>

      {items.map((item, index) => (
        <CartItem
          removeBtnHandle={removeBtnHandle}
          key={index}
          product={item}
          index={index}
        />
      ))}
      <p className="checkout-total-price">
        Total Price:{" "}
        ${totalPrice}
      </p>
      <br />
      <form className="form-position">
        <label className="label-size">
        <hr/>
          <input type="email" name="email" placeholder="E-mail adres. . ." />

          <br />

          <input type="text" name="firstname" placeholder="Firstname. . ." />
          <input type="text" name="lastname" placeholder="Lastname. . ." />

          <br />

          <input type="text" name="adress" placeholder="Adress. . ." />

          <br/>

          <input type="number" name="Zip" placeholder="Zip. . ." />
          <input type="text" name="City" placeholder="City. . ." />

          <br />

          

          <input type="text" name="State" placeholder="State. . ." />
                    
          <hr/>
        </label>
      </form>
    
      <br />
      <div className="btn-final-checkout">
        <button className="checkout-continue">
          <Link to="/products">Continue shopping</Link>
        </button>

        <button className="checkout-buy" onClick={buy}>
          <Link to="/confirmationpage">Buy</Link>
        </button>
      </div>
      <br />
    </>
  );
}
