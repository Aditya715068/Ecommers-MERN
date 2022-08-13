import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct, getAdminProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";



const Home = () => {
  
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAdminProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}


          <div className="banner">

          <div class="carousel">
  <ul class="panes">
    
    <li id="s1">
      <img src="https://www.tatacard.com/tata-card-en/assets/media/images/personal/offers/shopping/eoss/banner-microsite.jpg"/>   
      <div class="content">
          <h3>Great Indian Sales</h3>
          <p>Upto 80% OFF.Iconic style is always in fashion. </p>
      </div>
    </li>
      
    <li id="s2">
      <img src="https://www.tatacard.com/tata-card-en/assets/media/images/personal/offers/shopping/eoss/banner-microsite.jpg"/>
      <div class="content">
        <h3>Offer for Sale</h3>
        <p>Offer for Sale (OFS) is when the promoters i.e. owners of a listed company sell their shares to the general public.</p>
      </div>
    </li>
      
    <li id="s3">
      <img src="https://www.tatacard.com/tata-card-en/assets/media/images/personal/offers/shopping/eoss/banner-microsite.jpg"/>
      <div class="content">
        <h3>Get flat 80% off</h3>
          <p>Get flat 80% off on branded apparels, footwear and accessories for men, women online. End of Season Sale Easy returns and exchanges COD available.</p>
      </div>
    </li>
      
    <li id="s4">
      <img src="https://www.tatacard.com/tata-card-en/assets/media/images/personal/offers/shopping/eoss/banner-microsite.jpg"/>
      <div class="content">
        <h3> $20 off voucher</h3>
          <p>Get your $20 off voucher. Your email *. *To redeem your offer, you need to sign up for Bose emails and communications along with creating a My Bose account.</p>
      </div>
    </li>
      
    <li id="s5">
      <img src="https://www.tatacard.com/tata-card-en/assets/media/images/personal/offers/shopping/eoss/banner-microsite.jpg"/>
      <div class="content">
        <h3>RAY-BAN</h3>
          <p>Iconic style is always in fashion</p>
      </div>
    </li>
  </ul>
</div>

</div>



          

          <h2 className="homeHeading">Today's Best Deal</h2>

          <div className="container" id="container">
            {products &&
              products.slice(0,2).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
