import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { UpcomingMoviesContext } from '../contexts/upcomingMoviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'


const UpcomingMovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => { 
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title={'Upcoming Movies'}
      movies={movies}
      action={(movie) => {
        return <AddToWatchlistButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;