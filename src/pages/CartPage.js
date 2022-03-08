import React from "react";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function CartPage() {
	return (
		<>
			<div className="cart-wrapper">
				<h1 className="cart-page-title">Shopping cart</h1>

				<div className="cart-top">
					<button className="cart-top-buttons continue">
						<Link to="/products">Continue shopping</Link>
					</button>
					
					<button className="cart-top-buttons checkout">
						<Link to="/checkout">Checkout</Link>
					</button>
				</div>

				<div className="cart-bottom">
					<div className="cart-bottom-products-container">
						<Cart />
					</div>
				</div>
			</div>
		</>
	);
}
