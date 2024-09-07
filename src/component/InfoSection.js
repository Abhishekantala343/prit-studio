import React from "react";
import Facebook from "../assest/images/facebook.png";
import Twitter from "../assest/images/twitter.png";
import Linkedin from "../assest/images/linkedin.png";
import Instagram from "../assest/images/instagram.png";
import Youtube from "../assest/images/youtube.png";
import Location from "../assest/images/location.png";
import Mail from "../assest/images/mail.png";
import Call from "../assest/images/call.png";

const InfoSection = () => {
  return (
    <section className="info_section ">
      <div className="info_container layout_padding-top">
        <div className="container">
          <div className="heading_container">
            <h2>Contact Us</h2>
          </div>
          <div className="info_main">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div className="info_contact ">
                  <a href="#" className="link-box">
                    <div className="img-box">
                      <img src={Location} alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>Location</h6>
                    </div>
                  </a>
                  <a href="#" className="link-box">
                    <div className="img-box">
                      <img src={Mail} alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>demo@gmail.com</h6>
                    </div>
                  </a>
                  <a href="#" className="link-box">
                    <div className="img-box">
                      <img src={Call} alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>Call +01 1234567890</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-lg-3">
                <div className="info_link-box">
                  <ul>
                    <li className=" ">
                      <a className="" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="">
                      <a className="" href="about.html">
                        About{" "}
                      </a>
                    </li>
                    <li className="">
                      <a className="" href="gallery.html">
                        Gallery{" "}
                      </a>
                    </li>
                    <li className="">
                      <a className="" href="blog.html">
                        Blog{" "}
                      </a>
                    </li>
                    <li className="">
                      <a className="" href="testimonial.html">
                        Testimonial{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="social_box">
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={Linkedin} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                  <a href="#">
                    <img src={Youtube} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
