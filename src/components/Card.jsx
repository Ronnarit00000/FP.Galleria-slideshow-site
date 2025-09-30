import Modal from "./Modal";
import { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export default function Card({data}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardImage = data.images.gallery.slice(1);
  const cardArtist = data.artist.image.slice(1);
  const cardName = data.name;
  const cardArtistName = data.artist.name;
  const cardYear = data.year;
  const cardDescription = data.description;
  const cardSoure = data.source;

  return (
    <>
      <section className="card">
        <div className="container wraps">
          <div className="head">
            <img className="image" src={cardImage} alt={cardName}/>
            <img className="artist" src={cardArtist} alt={cardArtistName} />
            <button className="btn" onClick={() => setIsModalOpen(true)}>
              <BsArrowsFullscreen />
              <span className="text-preset-7">VIEW IMAGE</span>
            </button>
            <div className="name">
              <h2 className="text-preset-2">{cardName}</h2>
              <h4 className="text-preset-4">{cardArtistName}</h4>
            </div>
          </div>

          <div className="body">
            <h1 className="year text-preset-1">{cardYear}</h1>
            <div className="description">
              <p className="text-preset-3">{cardDescription}</p>
              <a href={cardSoure} target="_blank" className="text-preset-5 text-nounderline">GO TO SOURCE</a>
            </div>
          </div>
        </div>
      </section>
      <Modal data={data} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  )
};