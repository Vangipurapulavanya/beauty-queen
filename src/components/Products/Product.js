import "./Product.scss";
import { useDispatch } from "react-redux";
import { showDescriptionModal } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from '../Spinner/Spinner';

export default function Product({ item }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getImageApi = async () =>{
    try {
      const data = await axios
      .get(item.img)
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
    <div
      key={item.id}
      className="product__item"
      onClick={() => {
        dispatch(showDescriptionModal(true, item));
      }}
    >
      <div className="product__item-image">
        {loading ? <img src={item.img} alt="" />: <Spinner/>}
      </div>
      <div className="product__item-title-price">
        <span className="product__item-title">{item.title}</span>
        <span className="product__item-price">${item.price}</span>
      </div>
    </div>
  );
}
