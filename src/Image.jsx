import React from "react";
import img3 from "./images/BLACK1.1.webp";
import img2 from "./images/milkyWay.jpg";

export default function Image() {
  const handleClick = (e) => {
    e.target.src = img2;
    console.log(e.target.src);
  };

  return (
    <img
      src={img3}
      alt=""
      onClick={(e) => handleClick(e)}
      style={{ height: 100, weight: 100, padding: 10 }}
    />
  );
}
