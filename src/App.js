import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Topbanner from './components/Topbanner';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from './pages/Products';
import Cart from "./pages/CartPage";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
	return (
		<div className="App">
     
     <BrowserRouter>
      <Topbanner />
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/confirmationpage" element={<ConfirmationPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
		</div>
	);
}

export default App;
