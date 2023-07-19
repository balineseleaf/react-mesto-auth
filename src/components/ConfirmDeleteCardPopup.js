import React from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeleteCardPopup = (props) => {
  const { isOpen, isClose, onSubmit } = props;
  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"delete-card"}
      onClose={isClose}
      isOpen={isOpen}
    >
      <button
        type="submit"
        className="popup__submit popup__submitDeleteCard"
        onSubmit={onSubmit}
      >
        Да
      </button>
    </PopupWithForm>
  );
};

export default ConfirmDeleteCardPopup;
