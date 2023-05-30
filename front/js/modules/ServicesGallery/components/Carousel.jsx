import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const Carousel = ({ images, name, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="img-carousel">
      <div className="img-carousel__list">
        {images.map((image, index) => {
          const classes = classNames({
            'img-carousel__item': true,
            'img-carousel__item--active': !!(index === currentIndex)
          });

          return (
            <div className={classes} key={`${name}-${index}`}>
              <img src={image} alt={`carousel-img-${index}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Carousel;
