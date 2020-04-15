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
			<h1>RESULT COMPONENT</h1>
			<p>{`Your score: ${numDone} / ${questionTotal}`}</p>
			{answertotal.map((answer) => {
				return (
					<div>
						<p>{`Your answer was ${answer.answer}`}</p>
						<p>{`Correct answer was ${answer.question.questionFlag}`}</p>
						<p>{answer.isCorrect ? 'Good job!' : 'Ah, wrong answer!'}</p>
					</div>
				);
			})}

			<Link to="/">
				<button onClick={handleRestart}>Restart</button>
			</Link>
		</section>
	);
};

// restart: () => {
//   return initialState
// }

// questionId,
// answerIndex,
// question,
// answer: question.options[answerIndex],
// isCorrect: question.correctAnswerIndex == answerIndex

//   <p className="result-text">Question {answer.questionId} {answer.isCorrect ? '✅' : '❌'}</p>

{
	/* <section className='result-container'>
<h1>Your result</h1>
<h2>{questionComplete} / {questionTotal}</h2>
<article className="result-list">
{
  answertotal.map((answer) => {

    return (
        <p className="result-text">Question {answer.questionId} {answer.isCorrect ? '✅' : '❌'}</p>
        )
      })
    }
  </article>


<Link to='/'><button onClick={handleRestart}>Restart</button></Link>
</section> */
}
