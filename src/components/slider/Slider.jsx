import { useState } from 'react';
import './Slider.css';
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import sliderData from '../../data/sliderData';

const Slider = () => {
  const [slideIndex, setSliderIndex] = useState(1);
  const currentSlide = sliderData.find(object => object.id === slideIndex);

  const nextSlide = () => setSliderIndex(prev => prev === sliderData.length ? 1 : prev + 1);
  const prevSlide = () => setSliderIndex(prev => prev === 1 ? sliderData.length : prev - 1);

  return (
    <>
        <p className="index-info">{slideIndex} / {sliderData.length}</p>
        <div className="slider">
            <p className="image-info">{currentSlide.description}</p>
            <img src={`/public/images/img-${slideIndex}.jpg`} alt="Bedroom" className="slider-image" />

            <button onClick={prevSlide} className="navigation-button prev-button">
                <img src={leftChevron} alt='left' />
            </button>
            <button onClick={nextSlide} className="navigation-button next-button">
                <img src={rightChevron} alt='right' />
            </button>
        </div>
    </>
  )
}

export default Slider;