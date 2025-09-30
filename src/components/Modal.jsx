export default function Modal({isOpen, onClose, data}) {
  if(!isOpen){
    return null
  }
  
  const modalImage = data.images.gallery.slice(1);
  const cardName = data.name;

  return (
    <section className="modal">
      <div className="item">
        <button onClick={onClose}>CLOSE</button>
        <img src={modalImage} alt={cardName} />
      </div>
    </section>
  )
}