import { useParams } from "react-router";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { useContext } from "react";
import { GalleryContext } from "../contexts/GalleryContext";
import Notfound from "./Notfound";

export default function Detail() {
  const { id } = useParams();
  const { data } = useContext(GalleryContext);

  const position = data.findIndex(el => el.id == id);

  if(position == -1){
    return <Notfound />
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
