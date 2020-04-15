import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { quiz } from '../reducers/quiz';
import './resultpage.css';

export const ResultPage = () => {
	const answertotal = useSelector((state) => state.quiz.answers);
	const dispatch = useDispatch();
	const handleRestart = () => {
		dispatch(quiz.actions.restart());
	};
	const questionTotal = answertotal.length;
	const numDone = answertotal.filter((item) => item.isCorrect).length;
	return (
		<section className="result-container">
			<h1>{`Your score: ${numDone} / ${questionTotal}`}</h1>

			<article className="result-list">
				{answertotal.map((answer) => {
					return (
						<p className="result-text">
							Question {answer.questionId} {answer.question.questionFlag} {answer.isCorrect ? '✅' : '❌'}
						</p>
					);
				})}
			</article>

			<Link to="/">
				<button onClick={handleRestart}>Restart</button>
			</Link>
		</section>
	);
};
