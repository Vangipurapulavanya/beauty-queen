import "./Cart.scss";
import Quantity from "../Quantity/Quantity";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartStore.items);
  const [cartMenu, setCartMenu] = useState({
    cart: true,
    shipping: false,
    payment: false,
  });
  const dispatch = useDispatch();

  const cartPage = () => {
    return (
      <>
        {(() => {
          if (cartItems.length > 0) {
            return (
              <div className="cart__section-table">
                <table>
                  <tr>
                    <th>Item</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                  {cartItems.map((item) => {
                    return (
                      <tr>
                        <td>
                          <img src={item.img} alt=""></img>
                        </td>
                        <td>
                          <div className="cart__item-description">
                            <span>{item.title}</span>
                            <small>{item.size}</small>
                          </div>
                        </td>
                        <td>
                          <Quantity id={item.id} quantity={item.quantity} />
                        </td>
                        <td>${item.price}</td>
                        <td
                          className="cart__item-remove"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          X
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            );
          } else {
            return (
              <div className="no-items-container">No products in cart</div>
            );
          }
        })()}
      </>
    );
  };

  const shippingJson = [
    {
      label: "Country",
      name: "country",
    },
    {
      label: "State",
      name: "state",
    },
    {
      label: "City",
      name: "city",
    },
    {
      label: "Pincode",
      name: "pincode",
    },
    {
      label: "Address",
      name: "address",
    },
    {
      label: "Apartment",
      name: "apartment",
    },
  ];
  const shippingPage = () => {
    return (
      <div className="cart__shipping">
        <h3>Shipping Address</h3>
        <form className="shipping-address">
          {shippingJson.map((item) => {
            return (
              <div className="shipping-inputs">
                <label>{item.label}</label>
                <input type="text" name={item.name} />
              </div>
            );
          })}
        </form>
        <h3 className="shipping-method-heading">Shipping Method</h3>
        <form className="shipping-method">
          <div>
            <input type="checkbox" />
            <span>DNL</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Courier 1-2 days</span>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="cart">
      <div className="cart__section">
        <ul className="cart__section-header">
          <li
            className={cartMenu.cart ? "highlight-menu" : ""}
            onClick={() => {
              setCartMenu({
                cart: true,
                shipping: false,
                payment: false,
              });
            }}
          >
            Cart
          </li>
          <li
            className={cartMenu.shipping ? "highlight-menu" : ""}
            onClick={() => {
              setCartMenu({
                cart: false,
                shipping: true,
                payment: false,
              });
            }}
          >
            Shipping
          </li>
          <li
            className={cartMenu.payment ? "highlight-menu" : ""}
            onClick={() => {
              setCartMenu({
                cart: false,
                shipping: false,
                payment: true,
              });
            }}
          >
            Payment
          </li>
        </ul>
        {(() => {
          if (cartMenu.cart) {
            return cartPage();
          } else if (cartMenu.shipping) {
            return shippingPage();
          } else if (cartMenu.payment) {
            return <div className="no-items-container">Payment Page</div>;
          }
          // return (<div>Hello Im cart</div>);
        })()}
      </div>
      <div className="cart__order-summary">
        <table>
          <tr>
            <th>Order Summary</th>
            <td>
              <small>{cartItems.length} Items</small>
            </td>
          </tr>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>$ {item.price * item.quantity}</td>
              </tr>
            );
          })}
        </table>

        <div className="order-summary__total">
          <form>
            <label>Have a Promocode?</label>

            <input type="text" placeholder="PROMOCODE"></input>
          </form>
          <table>
            <tr>
              <td>Subtotal</td>
              {(() => {
                //calculate total price
                const subTotal = cartItems.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0);
                return <td>$ {subTotal.toFixed(2)}</td>;
              })()}
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$ 5</td>
            </tr>
          </table>
          <table className="order-summary__total-cost">
            <tr>
              <th>Total Price</th>
              {(() => {
                //calculate total price
                const subTotal = cartItems.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0);
                const shipping = 5;
                if(subTotal === 0) {
                  return <th>$ {subTotal}</th>
                }
                return <th>$ {(subTotal + shipping).toFixed(2)}</th>;
              })()}
            </tr>
          </table>
          <button
            className="order-summary__btn"
            onClick={() => {
              if (cartMenu.cart) {
                setCartMenu({
                  cart: false,
                  shipping: true,
                  payment: false,
                });
              } else if (cartMenu.shipping) {
                setCartMenu({
                  cart: false,
                  shipping: false,
                  payment: true,
                });
              } else if (cartMenu.payment) {
                setCartMenu({
                  cart: true,
                  shipping: false,
                  payment: false,
                });
              }
            }}
          >
            {cartMenu.payment ? "Back" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
