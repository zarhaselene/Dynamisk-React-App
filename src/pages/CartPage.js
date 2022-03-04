import React from "react";
import Cart, { useCart } from "../components/Cart";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function CartPage() {
	
	const items = useCart();
	return (
		<>
			<div className="cart-wrapper">
				<h1 className="cart-page-title">Shopping cart</h1>

				<div className="cart-top">
					<button className="cart-top-buttons continue">
						<Link to="/products">Continue shopping</Link>
					</button>
					<div className="cart-top-texts">
						<span className="cart-top-text">Shopping cart({items.length})</span>
						<span className="cart-top-text">Your wishlist(0)</span>
					</div>
					<button className="cart-top-buttons checkout">
						<Link to="/checkout">Checkout</Link>
					</button>
				</div>


				<div className="cart-bottom">
				<Cart />
				
				</div>
			</div>

		</>
	);
}
