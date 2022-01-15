import React from "react";

export default function Card(props) {
  return (
    <section className="card">
      <img
        src={props.item.imageUrl}
        className="card__img"
      />
      <div className="card__info">
        <span className="info__location">
          <span className="location__name">
            <img
              src="https://png.monster/wp-content/uploads/2021/06/png.monster-10.png"
              className="location__icon"
            />
            {props.item.location}
          </span>
          <span className="location__maps">
            <a href={props.item.googleMapsUrl}>Ver no Google Maps</a>
          </span>
        </span>
        <span className="card__title">{props.item.title}</span>
        <span className="card__date">{props.item.startDate} - {props.item.endDate}</span>
        <span className="card__description">
			{props.item.description}
		</span>
      </div>
    </section>
  );
}
