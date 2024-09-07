import React from "react";
import Logo from "../assest/images/priti-logo.png";

const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container d-block">
          <div className="main_nav_menu">
            <div className="fk_width">
              <div className="custom_menu-btn">
                <button onclick="openNav()">
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
              </div>
              <div id="myNav" className="overlay">
                <div className="overlay-content">
                  <a className="" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                  <a className="" href="about.html">
                    About{" "}
                  </a>
                  <a className="" href="gallery.html">
                    Gallery{" "}
                  </a>
                  <a className="" href="blog.html">
                    Blog{" "}
                  </a>
                  <a className="" href="testimonial.html">
                    Testimonial{" "}
                  </a>
                </div>
              </div>
            </div>
            <a className="navbar-brand" href="index.html">
              <img src={Logo} alt="prit-logo" />
            </a>
            <div className="user_option">
              <form className="form-inline ">
                <button className="btn  nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
