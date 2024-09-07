import React from "react";
import GalleryBg from "../assest/images/gallery-bg.png";
import Client from "../assest/images/client.png";
import Quote from "../assest/images/quote.png";
import Camera from "../assest/images/camera.png";

const ClientSection = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 ml-auto">
            <div className="heading_container">
              <h2>What Says Customer</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="client_container">
        <div className="client_bg">
          <img src={GalleryBg} alt="" />
        </div>
        <div className="container">
          <div className="client_box">
            <div className="row">
              <div className="col-lg-6">
                <div className="box b1">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="client_content-box layout_padding">
                          <div className="img-box">
                            <img src={Client} alt="" />
                          </div>
                          <div className="detail-box">
                            <h4>Plio Dorak</h4>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum It is a long established fact that a
                              reader will be distracted by the readable content
                              of a page when looking at its layout. The point of
                              using Lorem Ipsum
                            </p>
                            <img src={Quote} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="client_content-box layout_padding">
                          <div className="img-box">
                            <img src={Client} alt="" />
                          </div>
                          <div className="detail-box">
                            <h4>Plio Dorak</h4>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum It is a long established fact that a
                              reader will be distracted by the readable content
                              of a page when looking at its layout. The point of
                              using Lorem Ipsum
                            </p>
                            <img src={Client} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="client_content-box layout_padding">
                          <div className="img-box">
                            <img src={Client} alt="" />
                          </div>
                          <div className="detail-box">
                            <h4>Plio Dorak</h4>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum It is a long established fact that a
                              reader will be distracted by the readable content
                              of a page when looking at its layout. The point of
                              using Lorem Ipsum
                            </p>
                            <img src={Quote} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box b2">
                  <div className="camera_img-box">
                    <img src={Camera} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
