import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "../components/Cart";
import "../styles/Products.css";

function Products(product) {
	const dispatch = useDispatch();

	const addToCart = (item) => {
		console.log(item);
		dispatch({ type: "ADD", item });
	};

	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch("https://codexplained.se/shoes.php");
			const data = await response.json();
			console.log(data);

			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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
