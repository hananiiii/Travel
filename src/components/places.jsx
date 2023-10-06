import React from "react";

export default function places(props) {
  return (
    <div className="card">
      <img className="product--image mb-4 rounded-t-md" src={props.url} alt="product image" />
      <h2 className="mb-4">{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>
        <button className="text-body_color bg-text_color">See more</button>
      </p>
    </div>
  );
}