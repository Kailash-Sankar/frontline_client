import React from "react";
import { Carousel, Button } from "antd";
import { galleryLink } from "@utils/constants";

const ImageCarousel = (props) => {
  // const minHeight = props.minHeight ? props.minHeight : "400px";
  // const maxHeight = props.maxHeight ? props.maxHeight : "400px";
  // const width = props.imageWidth ? props.imageWidth : "100%";

  const caurosalData = props.caurosalData.map((image, index) => {
    return (
      <div key={index} className="carousel">
        <img key={index} src={image.url} className="img" />;
        <Button ghost className="link-btn">
          <a href={galleryLink} rel="noopener noreferrer" target="_blank">
            View Gallery
          </a>
        </Button>
      </div>
    );
  });

  return <Carousel autoplay={props.autoPlay || true}>{caurosalData}</Carousel>;
};

export default ImageCarousel;
