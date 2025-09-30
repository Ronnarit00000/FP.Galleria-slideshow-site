import { useParams, useNavigate} from "react-router";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { useContext } from "react";
import { GalleryContext } from "../contexts/GalleryContext";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useContext(GalleryContext);

  const position = data.findIndex(el => el.id == id);

  if(position == -1){
    return navigate("*");
  }

  const firstPosition = 0;
  const lastPosition = data.length - 1;
  let galleryData = data[position];

  return (
    <>
      <Card data={galleryData}/>
      <Slider 
        firstPosition={firstPosition}
        lastPosition={lastPosition}
        galleryData={galleryData} 
        position={position}
      />
    </>
  )
}
