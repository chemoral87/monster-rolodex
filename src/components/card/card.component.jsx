import { Component } from "react";

import "./card.styles.css";

const Card = ({ monster: { name, email, id } }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h3>{name}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default Card;
