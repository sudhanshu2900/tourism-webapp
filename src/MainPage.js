import React from "react";
import DescriptionCard from "./Components/DescriptionCard";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";
import GuideDetailCard from "./Components/GuideDetailCard";

function MainPage() {
  const { Howl } = require("howler");

  var welcomeSound = new Howl({
    src: ["khammaGhani.m4a"],
  });

  return (
    <>
      <Navbar />

      <div className="panel" id="home">
        <p>Travel your favorite place</p>
        <h2>Explore Rajasthan with us</h2>

        <a href="#mainDiv">🐪</a>
      </div>
      <img src="mandala.jpg" alt="mandala" width={"100%"} />
      <div id="aboutDiv">
        <div className="container">
          <div className="row">
            <h3>ABOUT US</h3>

            <p>
              The best way to enjoy a sightseeing tour of Rajasthan, or visit
              the famous markets, tasting the local cuisine is along with a tour
              guide. Our guides are from Rajasthan and has also cleared an exam
              conducted by Rajasthan tourism board. After clearing this exam,
              they receive a Green card. Our guides will assist you for all
              tourist sites and you can also hire them as Food & Shopping guides
              at the same fare.
            </p>
          </div>
        </div>
      </div>
      <div id="mainDiv">
        <img src="Gate2.jpg" alt="mandala" width={"100%"} />
        <div className="container">
          <p id="title">Explore places of Rajasthan</p>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <DescriptionCard
                img="hawamahal.jpg"
                name="Jaipur"
                rating="4.6"
                detail="Jaipur, popularly known as the Pink City of India, is the largest city in the state of Rajasthan. It is also the capital of Rajasthan. Known for Hawa Mahal, Jal Mahal, Amer Fort, Jantar mantar and several others."
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <DescriptionCard
                img="desert.jpg"
                name="Jaisalmer"
                rating="4.1"
                detail="Jaisalmer is known for the majestic Jaisalmer fort that fences the city. The most amazing thing about this fort is that it is a living urban center. It is lined with houses and temples and woven beautifully in narrow winding lanes."
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <DescriptionCard
                img="mehrangarh.jpg"
                name="Jodhpur"
                rating="3.9"
                detail="Jodhpur is famous for the distinctive colour of its buildings, a reminder of the Brahmins, who used to paint their houses blue and keep them cool during the summer. It is famous for antiques, bandhani and traditional wear."
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <DescriptionCard
                img="lake.jpg"
                name="Udaipur"
                rating="4.5"
                detail="Udaipur is well known for handicrafts such as paintings, marble articles, silver arts and terracotta. The Shilpgram is a platform where regional handicraft and hand-loom products are developed. Known as city of lakes."
              />
            </div>
          </div>
        </div>
      </div>
      <img src="Gate1.jpg" alt="border" width={"100%"} />
      <div id="guideDetailsPageDiv">
        <h1>OUR GUIDES</h1>
        <div className="container">
          <div className="row">
            <GuideDetailCard />
          </div>
        </div>
      </div>
      <div className="image">
        <img src="Jharokha.png" alt="camel" width={"100%"} />

        <img src="mandala.jpg" alt="mandala" width={"100%"} />
      </div>
      <div id="foot">
        <Footer />
      </div>
      <img
        src="womenWelcome.png"
        alt="swagat"
        id="welcomeWoman"
        width={"10%"}
        onClick={() => {
          welcomeSound.play();
        }}
      />
    </>
  );
}

export default MainPage;
