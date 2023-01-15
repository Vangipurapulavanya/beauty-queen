import "./Home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Categories from "../categories";
import Products from "../Products/Products";
import { popularProducts } from "../data";
import About from "../About/About";

export default function Home() {

  return (
    <div className="home">
      <Carousel
        className="home-banner-carousel"
        dynamicHeight="false"
        showThumbs="false"
      >
        <div>
          <img src="https://i.ibb.co/jMbg7pK/carousel-banner1.jpg" alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://i.ibb.co/GvT09fH/carousel-banner2.jpg" alt="" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://i.ibb.co/hDqQy5V/carousel-banner3.jpg" alt="" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>

      <div className="home-description">
        <About/>
        <section className="home-science">
              <div className="science__img">
              <img src="https://i.ibb.co/6sfPw39/science-banner.jpg" alt="" />
              </div>
          <div className="science__description">
              <h1>SCIENCE MEETS BEAUTY</h1>
              <p> Each our product is born out of actual need, curiosity and scientific proof.Our own in-house laboratory is where scientists look into the problems of each and very one of us,and then come-up with award winning, innovative ideas , that prove to be effective for all types of skin.</p>
            </div>
              
        </section>
        <section className="home-welove">
            <div className="welove__description">
              <h1>WE LOVE OUR PLANET </h1>
              <p>BeautyQueen is a natural cosmetics for care, clean,efficient,beautiful, just like you.We believe that beautiful skin is a reflection of health.Our cosmetics are based on the purest and most powerful botanicals,combined with cutting edge scientific advances. </p>  
              </div>
            <div className="welove__img">
            <img src="https://i.ibb.co/XjBp2LR/welove-banner.jpg" alt="" />
            </div>
        </section>
      </div>
      <Categories/>
        <div className="homepage-products-list">
          <h1 className="products-list-heading">Most popular items</h1>
          <Products data={popularProducts} />
        </div>
    </div>
    
)};
