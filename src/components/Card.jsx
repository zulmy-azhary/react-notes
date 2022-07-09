import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Card = ({ item }) => {
  const { actionHandler, removeHandler } = useContext(DataContext);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">{item.title}</div>
        <div className="note-item__date">{item.createdAt}</div>
        <div className="note-item__body">{item.body}</div>
      </div>
      <div className="note-item__action">
        <button onClick={actionHandler.bind(this, item)} className="note-item__archive-button">{!item.archived ? "Archive" : "Pindahkan"}</button>
        <button onClick={removeHandler.bind(this, item)} className="note-item__delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Card;