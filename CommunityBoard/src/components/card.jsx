import React from "react";

const Card = ({ title, description, link, image}) => {
  return (
    <div className="card">
        <img src={image} alt="placeholder" className="card-image" />
        <br />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="card-button" onClick={() => window.open(link)}>Learn More</button>
    </div>
  );
};

export default Card;