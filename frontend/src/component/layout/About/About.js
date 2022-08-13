import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (<>
<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">        
        <img src="../../../images/pic.png" alt=""/>
      </div>
      <div class="">
        <span class="blog-slider__code"></span>
        <div class="blog-slider__title" style={{ fontFamily: "'Parisienne', cursive" }}>Aditya Kumar</div>
        <div class="blog-slider__text">I am Aditya Kumar, Seasoned, forward-looking Software Engineer with backgroud in creating and executing innovative software solutions to enhance business productivity. Highly experienced in all aspects of the software development lifecycle and end-to-end project management, from concept through to development and delivery.</div>
        <div class="blog-slider__text">Designing, Developing, and Implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experiencce and hand-on technical expertise in a challenging role as a Full-Stack Developer. </div>

        <div class="blog-slider__text">
        Consistently recognized as a hands-on and competent leader, skilled at coordinating cross-functional teams in a fast-paced, deadline-driven environment to steer timely project completion with budgetary constraints.</div>
        <span class="blog-slider__code">Email:-adikumar1238@gmail.com</span>
        <span class="blog-slider__code">Mobile No:-7892713549</span>
        <a  class="blog-slider__button" href="mailto:adikumar1238@gmail.com">Send an Email</a>
      </div>
    </div>
 
    

    
  </div>
  <div class="blog-slider__pagination"></div>
</div>

    </>
  );
};

export default About;
