import React from "react";
import "../Components/ComponentStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbarList">
            <ul>
              <li>
                <a
                  href="#aboutDiv"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  to="/gallery"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Gallery
                </Link>
              </li>
              <li id="logoLi">
                <img src="traveller.png" alt="logo" width={"40px"} />
              </li>
              <li>
                <a
                  href="#mainDiv"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Tour Plans
                </a>
              </li>
              <li>
                <a
                  href="#foot"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
