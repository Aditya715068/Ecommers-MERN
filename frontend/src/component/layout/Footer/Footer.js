import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h4>DOWNLOAD OUR APP</h4>
    //     <p>Download App for Android and IOS mobile phone</p>
    //     <img src={playStore} alt="playstore" />
    //     <img src={appStore} alt="Appstore" />
    //   </div>

    //   <div className="midFooter">
    //     <h1>ECOMMERCE.</h1>
    //     <p>High Quality is our first priority</p>

    //     <p>Copyrights 2021 &copy; MeAbhiSingh</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h4>Follow Us</h4>
    //     <a href="http://instagram.com/meabhisingh">Instagram</a>
    //     <a href="http://youtube.com/6packprogramemr">Youtube</a>
    //     <a href="http://instagram.com/meabhisingh">Facebook</a>
    //   </div>
    // </footer>
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo" style={{ fontFamily: "'Parisienne', cursive" }}> Ecommerce Website
        </h1>
        
    <h2>Contact</h2>
    
    <address>
    412,Silver oak apt, Bangalore, India<br/>
          
      <a class="footer__btn" href="mailto:adikumar1238@gmail.com">Email Me</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">MERN</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">React</a>
        </li>

        <li>
          <a href="#">Node</a>
        </li>
            
        <li>
          <a href="#">MongoDB</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">System Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Data Science</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2021-Aditya Ecommers . All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span></span>
    </div>
  </div>
</footer>

    
  );
};

export default Footer;
