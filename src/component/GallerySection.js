import React from "react";
import GalleryBg from "../assest/images/gallery-bg.png";
import Gallery1 from "../assest/images/gallery-1.jpg";
import Gallery2 from "../assest/images/gallery-2.jpg";
import Gallery3 from "../assest/images/gallery-3.jpg";
import Gallery4 from "../assest/images/gallery-4.jpg";
import Gallery5 from "../assest/images/gallery-5.jpg";
import Gallery6 from "../assest/images/gallery-6.jpg";

const GallerySection = () => {
  return (
    <section className="gallery_section layout_padding-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 ml-auto">
            <div className="heading_container">
              <h2>Our Gallery</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <a href="">See More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_container">
        <div className="gallery_bg">
          <img src={GalleryBg} alt="" />
        </div>
        <div className="container">
          <div className="gallery_box">
            <div className="box b1">
              <div className="img-box">
                <img src={Gallery1} alt="" />
                <h5>photography</h5>
              </div>
            </div>
            <div className="box b2">
              <div className="img-box">
                <img src={Gallery2} alt="" />
                <h5>photography</h5>
              </div>
              <div className="img-box">
                <img src={Gallery3} alt="" />
                <h5>photography</h5>
              </div>
            </div>
            <div className="box b3">
              <div className="img-box">
                <img src={Gallery4} alt="" />
                <h5>photography</h5>
              </div>
              <div className="img-box">
                <img src={Gallery5} alt="" />
                <h5>photography</h5>
              </div>
            </div>
            <div className="box b4">
              <div className="img-box">
                <img src={Gallery6} alt="" />
                <h5>photography</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
