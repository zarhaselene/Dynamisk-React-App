import React from "react";
import { useCart, useDispatch } from "../components/Cart";
// Importerar useCart för att få tillgång till alla products
// Importerar useDispatch för att få tillgång till dispatch
import { Link } from 'react-router-dom'
import Trash from '../images/trash.svg'
import Cart from '../images/Cart.png'
import FastDelivery from '../images/FastDelivery.png'
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
    // Hämtar alla items med funktionen useCart()

  const dispatch = useDispatch();
      // Hämtar dispatch med funktionen useDispatch()

  const totalPrice = items.reduce((total, b) => total + b.price, 0);
// Räknar ut totala priset av produkter som vi har inne i kortet

  const removeBtnHandle = (index) => {
        // Skapar en ta bort knapp funktion 
    dispatch({ type: "REMOVE", index });
      /*  lägger till funktionen dispatch och lägger till ett object i den och passar från 
     cart components vad den ska göra om man trycker på deletebtn
 */
  };

  const buy = (index) => {
    dispatch({ type: "CLEARALL", index });
  }
  // Buy knappen raderar alla producter när du trycker på BUY bara för de ska se bra ut :)

    // Om kundvagnen är tom visa
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
      <br/>
      
      <br />
      <form className="form-position">
      <img src={FastDelivery} alt="" height="20%" width="20%" />
        <label className="label-size">
        <p className="checkout-label">Customer Info</p>
        <hr/>
          <input className="input-single" type="email" name="email" placeholder="E-mail address. . ." />

          <br />

          <input className="input-double" type="text" name="firstname" placeholder="Firstname. . ." />
          <input className="input-double" type="text" name="lastname" placeholder="Lastname. . ." />

          <br />

          <input className="input-single" type="text" name="address" placeholder="Address. . ." />

          <br/>

          <input className="input-double" type="number" name="Zip" placeholder="Zip. . ." />
          <input className="input-double" type="text" name="City" placeholder="City. . ." />

          <br />

          <input className="input-single" type="text" name="State" placeholder="State. . ." />
                    
          <hr/>
        </label>
      </form>

      <form className="form-position">
      <img src={Cart} alt="" height="20%" width="20%" />
     <label className="label-size">
     <p className="checkout-label">Add cart</p>
     <hr/>

     <input className="input-single" type="name" name="name" placeholder="Name on card. . ." />

<br/>
       <input className="input-single" type="number" name="Cartnumber" placeholder="Cardnumber. . ." />

       <br/>

       <input className="input-double" type="number" name="Month" placeholder="Month. . ." />
       <input className="input-double" type="number" name="Year" placeholder="Year. . ." />

       <br/>
       <input className="input-single" type="number" name="Cartsecuritynumber" placeholder="Cart security number. . ." />

       <br/>     
       <hr/>
     </label>
   </form>
      <br />
      <br />
      <br />
      <div className="btn-final-checkout">
        <button className="checkout-continue">
          <Link to="/products">Continue shopping</Link>
        </button>

        <Link className="a" to="/confirmationpage">
        <button className="checkout-buy" onClick={buy}>
          BUY
        </button>
        </Link>
      </div>
      <br />
    </>
  );
}
