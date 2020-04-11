import React from "react";

export function Spacer({
  width = 10,
  height = "auto",
  display = "inline-block",
}) {
  return <div style={{ width: width, display: display, height: height }}></div>;
}

export function Image({ webp, fallback, text, extra = {} }) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img className="state-logo" src={fallback} alt={text} {...extra} />
    </picture>
  );
}
