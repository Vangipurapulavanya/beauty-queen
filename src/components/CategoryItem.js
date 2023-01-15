import "./CategoryItem.scss";
import { Link } from "react-router-dom";
export default function CategoryItem({ item }) {
  let linkPage = "/shop";
  return (
    <div className="category__item">
      <div className="category__item-image">
        <img src={item.img} alt="" />
      </div>
      <Link to={linkPage}>
        <button className="category__item-btn">{item.title}</button>
      </Link>
    </div>
  );
}
