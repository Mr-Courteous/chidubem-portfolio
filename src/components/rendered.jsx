import React from "react";

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="image-card">
      <img src={image} alt={title} />
      <div className="image-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
