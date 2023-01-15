import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo-social-media">
          <Link className="logo-text" to="/">
            BeautyQueen
          </Link>
          <ul className="social-media">
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>
            <li>TWITTER</li>
          </ul>
        </div>
        <div className="footer-content">
          <p>
            STAY INFORMED ON OUR NEWEST TRENDS ARRIVALS, PROMOTIONS AND MORE
          </p>
          <form>
            <input name="email" placeholder="Email address" />
            <button>submit</button>
          </form>
          <div className="footer-content__nav">
            <div>
              ABOUT
              <ul className="nav-links">
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/ingredients">Ingredients</Link>
                </li>
              </ul>
            </div>
            <div>
              HELP
              <ul className="nav-links">
                <li>
                  <Link to="/delivery">Delivery and Returns</Link>
                </li>
                <li>
                  <Link to="/cancellation">Cancellation</Link>
                </li>
                <li>
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              PRODUCTS
              <ul className="nav-links">
                <li>
                  <Link to="/skin">Skin</Link>
                </li>
                <li>
                  <Link to="/hair">Hair</Link>
                </li>
                <li>
                  <Link to="/body">Body</Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
