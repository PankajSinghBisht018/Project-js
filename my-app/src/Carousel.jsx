import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div>
        <img src="/images/image1.jpg" alt="Slide 1" height={500} />
      </div>
      <div>
        <img src="/images/image2.jpg" alt="Slide 2" height={500}/>
      </div>
      <div>
        <img src="/images/image3.jpg" alt="Slide 3" height={500}/>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
