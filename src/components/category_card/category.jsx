import React from "react";

export default function CategoryCard({ icon, title, desc, href = "#" }) {
  return (
    <a className="category-card" href={href}>
      <div className="category-card__icon" aria-hidden="true">{icon}</div>
      <h4 className="category-card__title">{title}</h4>
      <p className="category-card__desc">{desc}</p>
    </a>
  );
}
