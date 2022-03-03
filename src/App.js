import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Topbanner from './components/Topbanner';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/CartPage";

function App() {
	return (
		<div className="App">
     
     <BrowserRouter>
      <Topbanner />
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
		</div>
	);
}

export default App;
