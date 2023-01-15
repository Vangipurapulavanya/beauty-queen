import "./Shop.scss";
import Products from "../Products/Products";
import {
  popularProducts,
  productListHair,
  productListSkin,
  productListBody,
} from "../data";
import { useState } from "react";

export default function Shop() {
  const [shopMenu, setShopMenu] = useState({
    skin: true,
    body: false,
    hair: false,
  });

  return (
    <div className="shop container">
      <ul className="shop-header">
        <li
          className={shopMenu.skin ? "highlight-menu" : ""}
          onClick={() => {
            setShopMenu({
              skin: true,
              hair: false,
              body: false,
            });
          }}
        >
          SKIN
        </li>
        <li
          className={shopMenu.hair ? "highlight-menu" : ""}
          onClick={() => {
            setShopMenu({
              skin: false,
              hair: true,
              body: false,
            });
          }}
        >
          HAIR
        </li>
        <li
          className={shopMenu.body ? "highlight-menu" : ""}
          onClick={() => {
            setShopMenu({
              skin: false,
              hair: false,
              body: true,
            });
          }}
        >
          BODY
        </li>
      </ul>
      {(() => {
        if (shopMenu.skin) {
          return <Products data={productListSkin} />; // change data for skin products
        } else if (shopMenu.hair) {
          return <Products data={productListHair} />; // change data for hair products
        } else if (shopMenu.body) {
          return <Products data={productListBody} />; // change data for body products
        } else {
          return <div>No Products</div>;
        }
      })()}
      {/* <Products data={productList} /> */}
      <div className="popular-products-list">
        <h1 className="products-list-heading">Most popular items</h1>
        <Products data={popularProducts} />
      </div>
    </div>
  );
}
