import { useNavigate } from "react-router";

export default function Figure({data}) {
  const navigate = useNavigate();
  const figureId = data.id;
  const figureImage = data.images.gallery.slice(1);
  const figureName = data.name;
  const figureArtistName = data.artist.name;
  
  return (
    <figure className="figure" onClick={() => navigate(`/detail/${figureId}`)}>
      <img className="image" src={figureImage} alt={figureName} />
      <figcaption className="figcaption">
        <h3 className="text-preset-3">{figureName}</h3>
        <p className="text-preset-5">{figureArtistName}</p>
      </figcaption>
    </figure>
  )
}
