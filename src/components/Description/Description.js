import "./Description.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideDescriptionModal, addToCart } from "../../redux/actions";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import axios from 'axios';
import Spinner from "../Spinner/Spinner";

export default function Description() {
  const [wishlist, setWishlist] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const isActive = useSelector(
    (state) => state.modalsStore.showDescriptionModal
  );
  const productItem = useSelector((state) => state.modalsStore.item);
  const cartItems = useSelector((state) => state.cartStore.items);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const itemInCart = cartItems.filter((item) => item.id === productItem.id);
    if (itemInCart.length === 0) {
      dispatch(addToCart(productItem));
      alert("item is added to cart");
    } else {
      alert("item is already in cart");
    }
  };

  const getImageApi = async () =>{
    try {
      const data = await axios
      .get(productItem.img)
      .then((res)=>{
        setImage(res.data)
      })
      setLoading(true);
    } catch(error) {
      alert("Something went wrong! Please try again.\n\n" + error);
    }
  }

  useEffect(()=>{
    getImageApi();
  });

  return (
    <div className={isActive ? "overlay active" : "overlay"}>
      <div className="description-container">
        <div
          className="close"
          onClick={() => {
            dispatch(hideDescriptionModal());
          }}
        />
        <div className="description-image">
          {loading ? <img src={productItem.img} alt="" /> : <Spinner/>}
        </div>
        <div className="description-details">
          <h3 className="description__title">{productItem.title}</h3>
          <div className="description__price-wishlist">
            <span className="description__price">${productItem.price}</span>
            <button
              className="description__wishlist-btn"
              onClick={() => {
                setWishlist(!wishlist);
              }}
            >
              {wishlist ? <HiOutlineHeart /> : <HiHeart />}
              Add to wishlist
            </button>
          </div>
          <p>
            <span>Description:</span> {productItem.description}
          </p>
          <div className="description__size-cart">
            <ul>
              <li>
                <input type="checkbox" defaultChecked />
                <span>{productItem.size}</span>
              </li>
            </ul>
            <button className="description-btns" onClick={addItemToCart}>
              Add to Cart
            </button>
          </div>
          <p>
            <span>Ingredients: </span>
            {productItem.ingredients}
          </p>
        </div>
      </div>
    </div>
  );
}
