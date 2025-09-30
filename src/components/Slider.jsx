import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { useNavigate } from "react-router";

export default function Slider(props) {
  const navigate = useNavigate();
  const {position, firstPosition, lastPosition, galleryData} = props;
  const sliderName = galleryData.name;
  const sliderArtistName = galleryData.artist.name;

  function preSlide(){
    return galleryData.id - 1 <= firstPosition ? lastPosition : galleryData.id - 1
  }

  function nextSlide(){
    return galleryData.id + 1 > lastPosition ? firstPosition : galleryData.id + 1
  }

  function calcPosition(){
    return (100 / lastPosition).toFixed(2) * position;
  }

  return (
    <section className="slider">
      <hr style={{width: `${calcPosition()}%`}}/>
      <div className="container">
        <div className="wraps">
          <h3 className="text-preset-3">{sliderName}</h3>
          <h5 className="text-preset-5">{sliderArtistName}</h5>
          <div className="slider-btn">
            <button onClick={() => navigate(`/detail/${preSlide()}`)}><RxTrackPrevious /></button>
            <button onClick={() => navigate(`/detail/${nextSlide()}`)}><RxTrackNext /></button>
          </div>
        </div>
      </div>
    </section>
  )
};