# Assignment 1 - ReactJS app.

Name: Steven Guiry (20053842)

## Features.

The following are the user features in which I have added.
 
 + Feature 1 - The cast of each movie is now displayed in the movie details page. The actors/actresses picture, the name of the actor/actress and the name of the character in which they played in the specific movie are displayed in table format.
 + Feature 2 - The trailer of the movie is displayed on the movie details page. The trailer is embedded so the user can watch the trailer (in full screen if they wish) without leaving the web app. 
 + Feature 3 = Added a new page that displays the top 20 rated movies of all time. This new page is accessed from any of the views via the site header.
 + etc
 + etc

## Setup requirements (If required).

I installed react-bootstrap to display the images in thumbnail format but this dependency should be included in the package.json file.

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id}/credits - lists the cast of the specific movie.
+ https://api.themoviedb.org/3/movie/${id}/videos - retrieves the movie trailer.
+ https://api.themoviedb.org/3/movie/top_rated - retrieves the top 20 rated movies of all time. 

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews. The entire cast of the movie is displayed, scroll down to view all the cast members. The movie trailer is also present for the user to watch. The trailer can also be played in full screen.

![][topRated]
>Shows the new top rated movie view.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/toprated - displays thetop rated movies on TMDB.
+ etc.
+ etc.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

Used some react-bootstrap features such as the thumbnail image used to display the cast. >> https://react-bootstrap.github.io/components/images/

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/credits-trailer_view.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[topRated]: ./public/topRatedView.png
