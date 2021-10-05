import React, { Component } from "react";
import LikeB from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  render() {
    const columns = [
      {
        name: "Title",
        path: "title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { name: "Genre", path: "genre.name" },
      { name: "Stock", path: "numberInStock" },
      { name: "Rate", path: "dailyRentalRate" },
      {
        key: 1,
        content: (movie) => (
          <LikeB
            status={movie.like}
            movie={movie}
            onClick={() => this.props.onLike(movie)}
          />
        ),
      },
      {
        key: 2,
        content: (movie) => (
          <button
            onClick={() => {
              this.props.onDelete(movie._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
    ];
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
