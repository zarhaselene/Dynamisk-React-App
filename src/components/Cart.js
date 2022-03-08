import React, { useReducer, useContext, createContext, useEffect } from "react";
// Importerar funktionerna useReducer, useContext & createContext för att kunnda använda dom i Cart funktionen
// Importerar funktionen useEffect för att använda den till local storage

import Trash from "../images/trash.svg";
import "../styles/Cart.css";

const CartStateContext = createContext();
// Skapar en contextfunction som ska sparar varje produkt i en Array genom funktionen

const CartDispatchContext = createContext();
// Skapar en till contextfunction som får det att hända grejer

const cartReducer = (state, action) => {
	// cartReducer Funktion som tar state & action 

	switch (action.type) {
		case "ADD":
			return [...state, action.item];
		// Returnar state i en array och lägger till en ny product i den

		case "REMOVE":
			const newArr = [...state];
			newArr.splice(action.index, 1);
			return newArr;
		// Skapar en array newArr
		// Splice ändrar el tar bort innehållet av en array
		// Tar bort 1 åt gången

		case "CLEARALL":
			const clearAll = [...state];
			clearAll.splice(action.index);
			return clearAll;
		// Tar bort allt när du trycker på buy button bara för de ska se bra ut :)


		default:
			throw new Error(`unknown action ${action.type}`);
		// När ingen action upptäcks throw new Error

	}
};

// Exporterar Cartprovider så man kan slå ihop hela våran app i den så man får tillgång till context Api
// Tar också funktionen CartProvider och lägger den runt våran Root i index.js
export const CartProvider = ({ children }) => {

	// Skapar state & dispatch som har funktionen useReducer()
	// Lägger in Cartreducer i usereducer funtionen
	const [state, dispatch] = useReducer(cartReducer, [], () => {

		const dataFromLocal = localStorage.getItem("state");
		// Localstorage.getItem returnar värdet av state

		return dataFromLocal ? JSON.parse(dataFromLocal) : [];
		// Om dataFromLocal är sant returnar JSON.parse 

	});

	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
		// Sätter värdet av states
		// Hämtar item och gör det till en JSON.stringify
	}, [state]);
	// När state körs , körs denna state

	// En return där vi slår ihop appen med state och dispatch 
	return (
		<CartDispatchContext.Provider value={dispatch}>
			<CartStateContext.Provider value={state}>
				{children}
			</CartStateContext.Provider>
		</CartDispatchContext.Provider>
	);
};

// skapar export så det går och använda funktionerna utanför denna fil
export const useCart = () => useContext(CartStateContext);
// en export som gör att man kan få tillgång till innehållet

export const useDispatch = () => useContext(CartDispatchContext);

const CartItem = ({ product, index, handleRemove }) => {
	// exportetar det som får det att att hända grejer


	return (
		<>
			<div className="cart-product">
				<div className="cart-product-detail">
					<img className="cart-product-image" src={product.url} alt="" />
					<div className="cart-product-details">
						<span className="cart-product-title">
							<b>Product: </b>
							{product.title}
						</span>
						<span className="cart-product-id">
							<b>ID: </b>
							{product.id}
						</span>
						<div className="cart-product-price">${product.price}</div>
					</div>
				</div>
				<button className="remove-product"
					onClick={() => handleRemove(index)}>
					<img src={Trash} alt="" />
				</button>
			</div>
		</>
	);
};

export default function Store() {
	const items = useCart();
	const dispatch = useDispatch();
	const totalPrice = items.reduce((total, b) => total + b.price, 0);

	const handleRemove = (index) => {
		dispatch({ type: "REMOVE", index });
	};

	if (items.length === 0) {
		return <p className="cart-empty">Cart is empty</p>;
	}
	return (
		<>
			<div className="total-position"><p className="total">Total price: ${totalPrice}</p></div>
			{items.map((item, index) => (
				<CartItem
					handleRemove={handleRemove}
					key={index}
					product={item}
					index={index}
				/>
			))}
		</>
	);
}
