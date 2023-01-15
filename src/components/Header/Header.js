import { Link } from "react-router-dom";
import "./Header.scss";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
export default function Header() {
  return (
    <header>
      <div className="container">
      <ul className="nav-links">
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <Link className="logo-text" to="/">
        BeautyQueen
      </Link>
      <ul className="page-links">
        <li>
          <Link to="/shop">
            <BiSearch />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <HiOutlineShoppingBag />
          </Link>
        </li>
        <li>
          <Link to="/account">
            <BiUser />
          </Link>
        </li>
      </ul>
      </div>
    </header>
  );
}
