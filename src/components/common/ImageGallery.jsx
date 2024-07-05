import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full mb-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-96 object-cover rounded-2xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
