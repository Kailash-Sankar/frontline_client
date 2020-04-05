import React from 'react';
import { Carousel } from "antd";

const ImageCarousel = props => {
  const caurosalData = props.caurosalData.map((image, index) => {
    return (<div key={index}>
      <h3><img src={image.url} style={{minHeight:'400px', maxHeight:'400px', width: "95%" , display:'block'}}/></h3>
    </div>)
  });

  return (
    <Carousel autoplay={props.autoPlay || true}>
       {caurosalData}
    </Carousel>
  );
}

export default ImageCarousel;