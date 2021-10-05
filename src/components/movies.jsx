import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  deleteM = (id) => {
    var updatedMovies = [];
    deleteMovie(id);
    updatedMovies = getMovies();
    this.setState({ movies: updatedMovies });
  };

  handleLike = (movieObj) => {
    const likedMovie = [...this.state.movies];
    const index = likedMovie.indexOf(movieObj);
    likedMovie[index] = { ...movieObj };
    likedMovie[index].like = !likedMovie[index].like;
    this.setState({ movies: likedMovie });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
      sortColumn,
    } = this.state;
    let filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: sorted, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, genres, currentGenre, sortColumn } =
      this.state;
    if (count === 0) {
      return <p>No movies found</p>;
    }
    const { totalCount, data } = this.getPagedData();
    return (
      <div className="row my-5">
        <div className="col-3">
          <ListGroup
            genres={genres}
            currentGenre={currentGenre}
            handleGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <h1 id="hell">
            Showing {totalCount.length} movies from the data base
          </h1>
          <MoviesTable
            movies={data}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.deleteM}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
