//THIS IS AN EXTREMELY INITIAL BUILD OF NAVBAR THAT WOULD BE CHANGED LATER
//THIS IS JUST TO GET AN ROUGH IDEA ABOUT THE PAGE
//

import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light">
              <a href="#header">
                <span>HyperQuest</span>
              </a>
            </h1>
          </div>

          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="Dataset">Dataset</a>
              </li>
              <li>
                <a href="team">Team</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
