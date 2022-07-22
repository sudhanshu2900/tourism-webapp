import React from "react";

function ReviewCard() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="customerReview">
              <p>
                Its very fantastic journey with Rajasthan Tour Service. They
                cover various parts of Rajasthan and provided valuable
                knowledge. Always ready to help us and never reminds us that we
                are in another country.
              </p>
              <h4>Sudhanshu Gupta</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customerReview">
              <p>
                Amazing experience with Rajasthan Tour Service, guides are also
                good and caring. Thier charges are also normal and I recommends
                that you can choose this.
              </p>
              <h4>Naveen Kumawat</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customerReview">
              <p>
                I'm very satisfied by thier guide service. This journey is
                wonderful because of Rajasthan Tour Service. Always ready to
                help us and never reminds us that we are in another country.
              </p>
              <h4>Ayush Agarwal</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default ReviewCard;
