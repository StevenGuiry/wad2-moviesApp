import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistMoviesPage = () => {
  const context = useContext(MoviesContext);
  const watchlists = context.movies.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlists}
      title={"Watchlist Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchlistMoviesPage;