import React from "react";
import "../../styles/Card.css";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

function Card({ image, title, description, children, className }: CardProps) {
  return (
    <div className={`card ${className || ''}`}>
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-text">{description}</p>}
        {children}
      </div>
    </div>
  );
}

export default Card;
