import '../styles/Header.css'
import Image from '../images/shoes.jpg'

export default function Header() {
  return (
          <>
              <div className="header-image">
                <img src={Image} alt="header" />
              </div>
              <div className="header-info">
                <h1 className="header-title">SPRING SALE</h1>
                <p className="header-desc">DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS</p>
                <div className="header-btn"><a href="/products">SHOP NOW</a></div>
             </div>
          </>     
  )
}
