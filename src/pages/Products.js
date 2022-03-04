import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

function Products(product) {

	const addToCart = (item) => {
		console.log(item);
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
		<div className="container">
			<div className="wrapper">
				<h1 className="page-title">Shoes</h1>
				<div className="filter-container">
					<div className="filter">
						<span className="filter-text">Filter products: </span>
						<select>
							<option disabled selected>
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
							<option disabled selected>
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
							<option selected> Recommended</option>
							<option>Newest</option>
							<option>Price (asc)</option>
							<option>Price (desc)</option>
						</select>
					</div>
				</div>
			</div>

			{products.map((product) => (
				<div key={product.id}>
					<div className="card">
						{/* Title  */}
						<Link to={`/products/${product.id}`}>
							<h1>{product.title}</h1>
						</Link>
						{/* Image  */}
						<Link to={`/products/${product.id}`}>
							<img src={product.url} alt="" height="400" width="400" />
						</Link>
						{/* Price  */}
						<p className="products-price">${product.price}</p>
						{/* Add to cart btn  */}
						<button className="" onClick={() => addToCart(product)}>
							Add to cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Products;
