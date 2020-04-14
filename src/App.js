/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { CurrentQuestion } from 'components/CurrentQuestion';

/* Our components */
import { IntroPage } from 'components/IntroPage';
import { Button } from 'components/Button'
import { ProgressBar } from 'components/ProgressBar'
import { ResultPage } from 'components/ResultPage'

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
      <IntroPage />
      <Button />
      <ProgressBar />
      <ResultPage />
    </Provider>
  );
};

{ /* <Router>
<Switch>
  <Route exact path="/">
    <MovieList movies={allMovies} />
  </Route>

  <Route exact path="/movie/:moviedetails">
    <MovieDetails movies={allMovies} />
  </Route>
</Switch>
</Router> */ }
