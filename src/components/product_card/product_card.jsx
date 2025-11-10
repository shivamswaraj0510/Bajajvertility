import React from "react";

export default function ProductCard({ title, salt, mrp, sale, image_link }) {
  return (
    <article className="product-card">
      <div  aria-hidden="true">
        <img className="product-card__img" src={image_link}/>
        </div>
      <h4 className="product-card__title">{title}</h4>
      <p className="product-card__salt">{salt}</p>
      <div className="product-card__price">
        <span className="product-card__mrp">₹{mrp}</span>
        <span className="product-card__sale">₹{sale}</span>
      </div>
      <button className="product-card__btn">Add to Cart</button>
    </article>
  );
}