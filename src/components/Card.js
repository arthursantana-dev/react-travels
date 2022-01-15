import React from "react";

export default function Card() {
  return (
    <section className="card">
      <img
        src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="card__img"
      />
      <div className="card__info">
        <span className="info__location">
          <span className="location__name">
            <img src="https://png.monster/wp-content/uploads/2021/06/png.monster-10.png" className="location__icon"/>
            Japão
          </span>
          <span className="location__maps">
            <a href="#">Ver no Google Maps</a>
          </span>
        </span>
        <span className="card__title">Monte Fuji</span>
        <span className="card__date">12/Jan - 24/Jan 2021</span>
        <span className="card__description">
          O Monte Fuji é a montanha mais alta do Japão, com 3.776 metros (12.380
          pés). O Monte Fuji é o local turístico mais popular do Japão, tanto
          para turistas japoneses quanto estrangeiros.
        </span>
      </div>
    </section>
  );
}
