import React from "react";
import "../Components/ComponentStyles.css";

function ImageGalleryPage() {
  return (
    <section className="gallery">
      <img src="mandala.jpg" alt="mandala" width={"100%"} />
      <div className="container">
        <h1 style={{ color: "#fff" }}>IMAGE GALLERY</h1>

        <div className="photoContainer">
          <img src="./photos/photo8.jpg" alt="" />
          <img src="./photos/photo9.jpg" alt="" />
          <img src="./photos/photo10.jpg" alt="" />
          <img src="./photos/photo11.webp" alt="" />
          <img src="./photos/photo12.jpg" alt="" />
          <img src="./photos/photo13.jpg" alt="" />
          <img src="./photos/photo14.jpg" alt="" />
          <img src="./photos/photo15.jpg" alt="" />
          <img src="./photos/photo16.jpg" alt="" />
          <img src="./photos/photo17.jpg" alt="" />
          <img src="./photos/photo18.jpg" alt="" />
          <img src="./photos/photo19.jpg" alt="" />
          <img src="./photos/photo20.jpg" alt="" />
          <img src="./photos/photo21.jpg" alt="" />
          <img src="./photos/photo22.jpg" alt="" />
          <img src="./photos/photo23.jpg" alt="" />
          <img src="./photos/photo24.webp" alt="" />
          <img src="./photos/photo25.jpg" alt="" />
          <img src="./photos/photo26.jpg" alt="" />
        </div>
      </div>
      <img src="./photos/udaipur.jpg" alt="" width={"100%"} />
      <img src="mandala.jpg" alt="mandala" width={"100%"} />
    </section>
  );
}

export default ImageGalleryPage;
