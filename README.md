# Dynamisk React App
Group assignment in the course System Development Framework at Medieinstitutet. 

## Description
The task is to create a webshop in React, which consumes an API, and displays the data as products in a webshop.

#### Products.js

* View a list of all products, retrieved via an API.

Each product must display the following:

* Picture of the product
* Title
* Price
* An “Add to Cart” button, which should allow the product to be added to the shopping cart
* A link to the Product page, for the specific product,

#### Product.js

* Displays specific data of the selected product, retrieved via an API. 

The following must be displayed for the individual product page:

* Picture of the product
* Title
* Price
* Description
* Stock balance
* An “Add to Cart” button, which should allow the product to be added to the shopping cart


#### Cart.js

* Lists all products that are placed in the shopping cart 

Each product must display:

* Picture of the product
* Title
* Price

* The total price for all products in the shopping cart must be calculated and displayed.

* A button that takes the user to the checkout page

#### Checkout.js

* Lists all products that are placed in the shopping cart, in an HTML <table>

* Each product in the table must display:
* Picture of the product
* Title
* Price

* Total price for all products in the shopping cart, must be calculated and displayed.

* If there are no products in the shopping cart, then a description must be displayed that the shopping cart is empty, together with a button that takes the user to the product list page
