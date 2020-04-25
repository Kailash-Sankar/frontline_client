import React from "react";
import { Carousel } from "antd";

const ImageCarousel = (props) => {
  //const minHeight = props.minHeight ? props.minHeight : '400px';
  //const maxHeight = props.maxHeight ? props.maxHeight : '400px';
  //const width = props.imageWidth ? props.imageWidth : "100%";

  const styleObj = {
    width: 600,
    height: 400,
    display: "block",
    border: "1px solid #353535",
    margin: "auto",
  };

  const caurosalData = props.caurosalData.map((image, index) => {
    return (
      <div key={index}>
        <img key={index} src={image.url} style={styleObj} />;
      </div>
    );
  });

  return <Carousel autoplay={props.autoPlay || true}>{caurosalData}</Carousel>;
};

export default ImageCarousel;
