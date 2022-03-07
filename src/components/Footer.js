import "../styles/Footer.css";

import Phone from "../images/mobile-screen.svg";
import Mail from "../images/envelope.svg";
import Pin from "../images/location.svg";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Pinterest from "../images/pinterest.png";
import Twitter from "../images/twitter.png";

function Footer() {
	return (
		<>
			<div className="footer-container">
				<div className="footer-left">
					<h1>MEZA</h1>
					<div className="footer-desc">
						Meza is one of Europe's largest retail chains for in-store shoes and
						shoes online. At Meza you will find trendy and classic women's and
						men's shoes as well as bags, jewelery, accessories, shoe care and
						shoe accessories. In our webshop, you can choose from our entire
						range and have your shoes sent home with fast delivery, and you can
						try them at home in peace and quiet.
						<br />
						<br />
						<b>Welcome to Meza!</b>
					</div>
					<div className="footer-social-container">
						<img src={Facebook} alt="" className="social-icons fa" />
						<img src={Instagram} alt="" className="social-icons ig" />
						<img src={Pinterest} alt="" className="social-icons pn" />
						<img src={Twitter} alt="" className="social-icons tw" />
					</div>
				</div>
        <div className="footer-center">
					<h3>Help</h3>
					<ul>
						<li>Customer Service</li>
						<li>My Account</li>
						<li>Order Tracking</li>
						<li>Wishlist</li>
						<li>Terms</li>
						<li>Legal & Privacy</li>
						<li>Cookie settings</li>
					</ul>
				</div>
				<div className="footer-right">
					<h3>Contact</h3>
					<div className="footer-contact-item">
						<img src={Pin} alt="" width="18px" />
						<span>Gustavslundsvägen 151 D, 167 51 Bromma</span>
            </div>
					<div className="footer-contact-item">
						<img src={Phone} alt="" width="18px" />
						<span>+46 702 567 89</span>
					</div>
					<div className="footer-contact-item">
						<img src={Mail} alt="" width="18px" />
						<span>meza@support.com</span>
					</div>
					<img
						src="https://i.ibb.co/Qfvn4z6/payment.png"
						alt=""
						className="footer-payment"
					/>
				</div>
			</div>
			<div className="bottom">
				<p className="copy">
					&copy;{new Date().getFullYear()} Meza | All rights reserved
				</p>
			</div>
		</>
	);
}

export default Footer;
