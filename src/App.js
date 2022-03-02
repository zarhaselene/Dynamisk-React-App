import React from "react";
import Topbanner from './components/Topbanner';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
      <>
        <Topbanner />
        <Navbar />
        <Footer />
      </>
		</div>
	);
}

export default App;
