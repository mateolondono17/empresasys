import React from 'react'
import img1 from '../../../../src/assets/img/imgCarrusel1.png'
import img2 from '../../../../src/assets/img/imgCarrusel2.png'
import img3 from '../../../../src/assets/img/imgCarrusel3.png'
export const Home = () => {
  return (
    <section className="imgs">
      <h1 className="tituloPrincipal mb-3">EMPRESA SYS</h1>
      <section
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <section className="carousel-inner mt-5">
          <section className="carousel-item active">
            <img src={img1} className="img1 d-block w-100"alt="..."/>
          </section>
          <section className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
            />
          </section>
          <section className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
            />
          </section>
        </section>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
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
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </section>
  )
};
