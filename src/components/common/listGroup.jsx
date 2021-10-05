import React from "react";
const ListGroup = ({
  genres,
  valueProperty,
  textProperty,
  currentGenre,
  handleGenreChange,
}) => {
  return (
    <div className="list-group">
      {genres.map((genre) => (
        <button
          key={genre[valueProperty]}
          type="button"
          onClick={() => {
            handleGenreChange(genre);
          }}
          className={
            currentGenre.name === genre.name
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {genre[textProperty]}
        </button>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
