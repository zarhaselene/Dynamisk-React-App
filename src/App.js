import React from "react";
import Topbanner from './components/Topbanner';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
     
      <Topbanner />
      <Navbar />
        <Home />
      <Footer />
		</div>
	);
}

export default App;
