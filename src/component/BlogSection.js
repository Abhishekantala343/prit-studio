import React from "react";
import Blog1 from "../assest/images/blog1.jpg";
import Blog2 from "../assest/images/blog2.jpg";
import GalleryBg from "../assest/images/gallery-bg.png";

const BlogSection = () => {
  return (
    <section className="blog_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Letest Blog</h2>
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
      <div className="blog_container">
        <div className="blog_bg">
          <img src={GalleryBg} alt="" />
        </div>
        <div className="container">
          <div className="blog_box">
            <div className="row">
              <div className="col-md-6">
                <div className="box b1">
                  <div className="img-box">
                    <img src={Blog1} alt="" />
                  </div>
                  <div className="blog-detail">
                    <div className="blog_title">
                      <h5>Best photography</h5>
                      <div className="blog_post">
                        <h6>Post By: Pic studio</h6>
                        <h6>16-01-2020</h6>
                      </div>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box b2">
                  <div className="img-box">
                    <img src={Blog2} alt="" />
                  </div>
                  <div className="blog-detail">
                    <div className="blog_title">
                      <h5>Photography</h5>
                      <div className="blog_post">
                        <h6>Post By: Pic studio</h6>
                        <h6>16-01-2020</h6>
                      </div>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum
                    </p>
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

export default BlogSection;
