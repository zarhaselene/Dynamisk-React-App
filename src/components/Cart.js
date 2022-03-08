import React, { useReducer, useContext, createContext, useEffect } from "react";
import Trash from "../images/trash.svg";
import "../styles/Cart.css";

const CartStateContext = createContext();

const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.item];
		case "REMOVE":
			const newArr = [...state];
			newArr.splice(action.index, 1);
			return newArr;
		case "CLEARALL":
			const clearAll = [...state];
			clearAll.splice(action.index);
			return clearAll;

		default:
			throw new Error(`unknown action ${action.type}`);
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, [], () => {
		const dataFromLocal = localStorage.getItem("state");
		return dataFromLocal ? JSON.parse(dataFromLocal) : [];
	});

	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]);
	return (
		<CartDispatchContext.Provider value={dispatch}>
			<CartStateContext.Provider value={state}>
				{children}
			</CartStateContext.Provider>
		</CartDispatchContext.Provider>
	);
};

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);

const CartItem = ({ product, index, handleRemove }) => {

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
          <img src={Trash}  alt="" />
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
