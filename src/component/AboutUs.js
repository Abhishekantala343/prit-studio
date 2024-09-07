import React from "react";
import AboutUsImg from "../assest/images/about-img.png";
import PlayImg from "../assest/images/play.png";

const AboutUs = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Studio</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <div className="play_btn">
          <a href="#">
            <img src={PlayImg} alt="" />
          </a>
        </div>
        <img src={AboutUsImg} className="about-img" alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
