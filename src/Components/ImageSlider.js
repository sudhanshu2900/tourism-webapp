import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "photos/photo1.webp" },
  { url: "photos/photo2.jpg" },
  { url: "photos/photo3.jpg" },
  { url: "photos/photo4.jpg" },
  { url: "photos/photo5.webp" },
  { url: "photos/photo6.webp" },
  { url: "photos/photo7.webp" },
];

function ImageSlider() {
  return (
    <div>
      <SimpleImageSlider
        width={700}
        height={400}
        images={images}
        showNavs={true}
        style={{ margin: "auto" }}
      />
    </div>
  );
}

export default ImageSlider;
