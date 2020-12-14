# Assignment 1 - ReactJS app.

Name: Steven Guiry (20053842)

## Features.

The following are the user features in which I have added.
 
 + Feature 1 - The cast of each movie is now displayed in the movie details page. The actors/actresses picture, the name of the actor/actress and the name of the character in which they played in the specific movie are displayed in table format.
 + Feature 2 - The trailer of the movie is displayed on the movie details page. The trailer is embedded so the user can watch the trailer (in full screen if they wish) without leaving the web app. 
 + Feature 3 - Added a new page that displays the top 20 rated movies of all time. This new page is accessed from any of the views via the site header.
 + Feature 4 - Added a new page that displays the movies that are now playing in the cinemas. This new page is accessed via the site header.

## Setup requirements (If required).

I installed react-bootstrap to display the images in thumbnail format but this dependency should be included in the package.json file.

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id}/credits - lists the cast of the specific movie.
+ https://api.themoviedb.org/3/movie/${id}/videos - retrieves the movie trailer.
+ https://api.themoviedb.org/3/movie/top_rated - retrieves the top 20 rated movies of all time. 
+ https://api.themoviedb.org/3/movie/now_playing - lists the movies in cinemas at the moment.


### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews. The entire cast of the movie is displayed, scroll down to view all the cast members. The movie trailer is also present for the user to watch. The trailer can also be played in full screen.

![][topRated]
>Shows the new top rated movie view.

![][nowPlaying]
>Shows the new movie view, now playing.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/toprated - displays the top rated movies on TMDB.
+ /movies/nowplaying - displays the movies that are currently in cinemas.

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

Used some react-bootstrap features such as the thumbnail image used to display the cast. >> https://react-bootstrap.github.io/components/images/

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/credits-trailer_view.png
[topRated]: ./public/topRatedView.png
[nowPlaying]: ./public/nowplayingView.png
