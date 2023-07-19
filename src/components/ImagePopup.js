const ImagePopup = (props) => {
  const { onClose, isOpen, card } = props;
  // props: сначала пустой массив card,
  // а после клика с данными выбранной карточки
  // потому что в App.js у нас пропс стоит card={selectedCard}
  // после закрытия зумпопапа - снова пустой массив - так работает сеттер
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <img alt={card.name} className="popup__image" src={card.link} />
        <p className="popup__image-text">{card.name}</p>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
};

export default ImagePopup;
