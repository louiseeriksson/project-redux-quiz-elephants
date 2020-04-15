import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// BrowserRouter as Router, Switch, Route
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
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
              <IntroPage />
            </Route>
            <Route exact path='/resultPage'>
              <ResultPage />
            </Route>
            <Route exact path='/questions/:questionid'>
              <CurrentQuestion />
            </Route>
        </Switch>
        <ProgressBar />
      </BrowserRouter>
    </Provider>
  );
};


