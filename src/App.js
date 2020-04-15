import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// BrowserRouter as Router, Switch, Route
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { CurrentQuestion } from 'components/CurrentQuestion';

/* Our components */
import { IntroPage } from 'components/IntroPage';
import { Button } from 'components/Button';
import { ProgressBar } from 'components/ProgressBar';
import { ResultPage } from 'components/ResultPage';

const reducer = combineReducers({
	quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<IntroPage />
					</Route>
					<Route exact path="/resultPage">
						<ResultPage />
					</Route>
					<Route exact path="/questions/:questionid">
						<CurrentQuestion />
					</Route>
				</Switch>
				{/* <ProgressBar /> */}
			</BrowserRouter>
		</Provider>
	);
};

// Louise
// Ann
// Sara
// Ebba
//Styling
// Mattias
// Elin
// Lisa

// Countries
// France <i class="em em-fr" aria-role="presentation" aria-label="France Flag"></i>
// South africa <i class="em em-flag-za" aria-role="presentation" aria-label="South Africa Flag"></i>
// Sweden <i class="em em-flag-se" aria-role="presentation" aria-label="Sweden Flag"></i>
// Australia <i class="em em-flag-au" aria-role="presentation" aria-label="Australia Flag"></i>
// Japan <i class="em em-jp" aria-role="presentation" aria-label="Japan Flag"></i>
// Chile <i class="em em-flag-cl" aria-role="presentation" aria-label="Chile Flag"></i>
//
