import React from 'react';
import { Carousel } from "antd";

const ImageCarousel = props => {

  const minHeight = props.minHeight ? props.minHeight : '400px';
  const maxHeight = props.maxHeight ? props.maxHeight : '400px';
  const width = props.imageWidth ? props.imageWidth : "100%";

  const caurosalData = props.caurosalData.map((image, index) => {
    return (<div key={index}>
      <h3><img src={image.url} style={{minHeight: minHeight, maxHeight: maxHeight, width: width , display:'block'}}/></h3>
    </div>)
  });

  return (
    <Carousel autoplay={props.autoPlay || true}>
       {caurosalData}
    </Carousel>
  );
}

export default ImageCarousel;