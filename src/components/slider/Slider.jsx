import './Slider.css';
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

const Slider = () => {
  return (
    <>
        <p className="index-info">3 / 5</p>
        <div className="slider">
            <p className="image-info">Bedroom</p>
            <img src="/public/images/img-3.jpg" alt="Bedroom" className="slider-image" />

            <button className="navigation-button prev-button"><img src={leftChevron} alt='left' /></button>
            <button className="navigation-button next-button"><img src={rightChevron} alt='right' /></button>
        </div>
    </>
  )
}

export default Slider;