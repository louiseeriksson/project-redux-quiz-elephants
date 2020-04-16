import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { quiz } from '../reducers/quiz';
import './CurrentQuestion.css';
import { ResultPage } from './ResultPage';

export const CurrentQuestion = () => {
	const dispatch = useDispatch();
	const [ answer, setAnswer ] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	const handleNextQuestion = (e) => {
		e.preventDefault();
		dispatch(
			quiz.actions.submitAnswer({
				questionId: question.id,
				answerIndex: answer
			})
		);
		setAnswer('');
		dispatch(quiz.actions.goToNextQuestion());
	};

	const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex]);
	const userDone = useSelector((state) => state.quiz.quizOver);
	const allQuestions = useSelector((state) => state.quiz.questions.length);
	const myQuestion = useSelector((state) => state.quiz.currentQuesionIndex);

	if (!question) {
		return <h1>Oh no! I could not find the current question!</h1>;
	}

	// Added this conditional rendering so ResultPage will show if userDone is true instead of the questions
	if (userDone) {
    return (
      <ResultPage />
    )
  }

	return (
		<form className="form-container" onSubmit={handleOnSubmit}>
			<h1>Which country has this flag?</h1>
			<span>{question.questionText}</span>
			<i
				style={{ fontSize: 50 }}
				class={`em em-flag-${question.questionClass}`}
				aria-role="presentation"
				aria-label={`${question.questionFlag} Flag`}
			/>

			<section className="answer-container">
				{question.options.map((option, index) => {
					return (
						<button
							className={answer == index ? 'checked' : 'answer-button'}
							onClick={(e) => setAnswer(e.target.value)}
							type="submit"
							value={index}
						>
							{option}
						</button>
					);
				})}
			</section>
				{/* Changed this conditional rendering to only one button & link since we want to change the text on the button but not its functionality when on last question */}
				{/* The rendering on line 42 will instead show us the results if the quiz is done */}
				<Link to={`/questions/${question.id}`}>
					<button onClick={handleNextQuestion}>{myQuestion === allQuestions - 1 ? 'Show result' : 'Next question'}</button>
				</Link>

			{/* Added this section to display current question / total questions  */}
			<section className="progressbar">
				{myQuestion} / {allQuestions}
			</section>
		</form>
	);
};