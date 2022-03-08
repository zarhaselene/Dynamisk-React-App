import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// hämtar useParams från react-router-dom

import { useDispatch } from "../components/Cart";
import { Link } from "react-router-dom";
import "../styles/Product.css";

function Product({ Product }) {
	const dispatch = useDispatch();

	const addToCart = (item) => {
		console.log(item);
		dispatch({ type: "ADD", item });
	};
	const [product, setProduct] = useState({});
	const params = useParams();
	// kopplar ihop useParams() functionen till params


	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://codexplained.se/shoes.php?id=" + params.id
				// response hämtar api + api id
			);
			const data = await response.json();
			console.log(data);

			setProduct(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="product-page-container" key={product.id}>
			<button className="product-page-back-btn">
				<Link to="/products">Back </Link>
			</button>
			<div className="product-page-wrapper">
				{/* Image */}
				<div className="image-container">
					<img className="product-image" src={product.url} alt="" />
				</div>
				{/* Info */}
				<div className="info-container">
					<h1 className="product-title">{product.title}</h1>
					<p className="product-desc">{product.description}</p>
					<span className="product-price">${product.price}</span>
					<p className="product-storage">In stock: {product.storage}</p>

					<div className="product-filter-container">
						<div className="product-filter">
							<select className="product-filter-size">
								<option>
									{" "}
									Size
								</option>
								<option>38</option>
								<option>39</option>
								<option>40</option>
								<option>41</option>
							</select>
						</div>
					</div>
					{/* Add to cart */}
					<div className="product-add-btn">
						<button onClick={() => addToCart(product)}>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
