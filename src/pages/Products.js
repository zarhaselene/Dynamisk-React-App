import React, { useState, useEffect } from "react";
// Imorterar useState & useEffect
// Sparar data i useState och anropar den med useEffect

import { Link } from "react-router-dom";
import { useDispatch } from "../components/Cart";
// Importerar useDispatch som gör att man kan få tillgång till innehållet

import "../styles/Products.css";

function Products(product) {
	const dispatch = useDispatch();
	// Kallar på funktionen useDispatch() och döper den till dispatch

	// Skapar funktionen addToCart och lägger tilll vad knappen ska göra
	const addToCart = (item) => {
		console.log(item);
		dispatch({ type: "ADD", item });
	};

	const [products, setProducts] = useState([]);
	// Skapar products & setProducts som har funktionen useState() som har en tom array i sig ifall listan är tom

	const fetchData = async () => {
		// Funktion som fetchar data

		try {
			const response = await fetch("https://codexplained.se/shoes.php");
			// response hämtar api 

			const data = await response.json();
			// formaterar Api response till json()

			console.log(data);

			setProducts(data);
			// Sparar data

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		// kallar fetchData() när funktionen useEffect() körs
	}, []);
	// tomma arrayen gör så att datan kallas 1 gång

	// Returnar det som ska visas i products sida
	return (
		<>
			<h1 className="page-title">Shoes</h1>
			<div className="filter-container">
				<div className="filter">
					<span className="filter-text">Filter products: </span>
					<select>
						<option>
							{" "}
							Color
						</option>
						<option>Blue</option>
						<option>Grey</option>
						<option>White</option>
						<option>Yellow</option>
						<option>Multi</option>
					</select>
					<select>
						<option>
							{" "}
							Size
						</option>
						<option>37</option>
						<option>38</option>
						<option>39</option>
						<option>40</option>
						<option>41</option>
					</select>
				</div>
				<div className="filter">
					<span className="filter-text">Sort products: </span>
					<select>
						<option> Recommended</option>
						<option>Newest</option>
						<option>Price (asc)</option>
						<option>Price (desc)</option>
					</select>
				</div>
			</div>
			<div className="products-container">
				{products.map((product) => (
					<div key={product.id}>
						<div className="card">
							{/* Image  */}
							<Link to={`/products/${product.id}`}>
								<img src={product.url} alt="" height="400" width="400" />
							</Link>
							{/* skapar en Route som går till en product genom product.id */}

							<div className="card-info">
								{/* Title  */}
								<Link to={`/products/${product.id}`}>
									<h3>{product.title}</h3>
								</Link>
								{/* Price  */}
								<p className="products-price">${product.price}</p>
								{/* Add to cart btn  */}
								<div className="card-add-btn">
									<button onClick={() => addToCart(product)}>
										Add to cart
									</button>
									{/*  Kallar på funktionen addToCart i knappen */}

								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Products;
