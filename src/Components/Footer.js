import React from "react";
import { BsGoogle, BsInstagram } from "react-icons/bs";
import "../Components/ComponentStyles.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div id="myfooter">
            <div className="classic" id="logo">
              <img src="traveller.png" alt="logo" width={"60px"} />
              <h4>Rajasthan Tour Service</h4>
            </div>
            <div className="classic">
              <h3>We are available at</h3>
              <ul id="placeList">
                <li>Jaipur</li>
                <li>Jaisalmer</li>
                <li>Jodhpur</li>
                <li>Udaipur</li>
              </ul>
            </div>
            <div className="classic" id="contact">
              <h3>Have Query? Call us</h3>
              <p id="number">📞 +91 9887134034</p>
              <p>📝 gupta.vn63@gmail.com</p>
            </div>
            <div className="classic" id="socialMediaIcons">
              <h3>Our Media</h3>

              <a
                href="https://www.google.com/search?q=Rajasthan+top+famous+place&client=ms-android-xiaomi-rvo2&prmd=nimv&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqsJuqpcb3AhWoTGwGHWlLDM8Q_AUoAnoECAIQAg&biw=393&bih=764&dpr=2.75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGoogle size={20} />
              </a>
              <a
                href="https://www.instagram.com/tourism_jaipur/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={20} />
              </a>
            </div>
          </div>
          <div className="copyrightLine">
            <p>Copyright @ 2022, Rajasthan Tour Service. All Right Reserved</p>
          </div>
          <div className="footerLastLine">
            <p>
              <a
                href="https://www.linkedin.com/in/sudhanshu2900"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Designed & Developed by ❤ Sudhanshu
              </a>{" "}
              <a
                href="https://www.instagram.com/sudhanshu__2900/"
                style={{ paddingLeft: "2rem" }}
              >
                <BsInstagram />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
