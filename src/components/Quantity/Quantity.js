import "./Quantity.scss";
import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "../../redux/actions";

export default function Quantity({id,quantity}) {
  const dispatch = useDispatch();
  return (
    <div className="quantity">
      <button className="quantity__decrease"
        onClick={()=> dispatch(decreaseItemQuantity(id))}>-</button>
      <span>{quantity}</span>
      <button className="quantity__increase"
      onClick={()=> dispatch(increaseItemQuantity(id))}>+</button>
    </div>
  );
}
