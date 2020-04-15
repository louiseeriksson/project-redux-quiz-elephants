import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { quiz } from '../reducers/quiz'
import './resultpage.css'


export const ResultPage = () => {
  const answertotal = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()
  const handleRestart = () => {

    dispatch(quiz.actions.restart())
  }

  return (
    <section>
      <h1>RESULT COMPONENT</h1>
      {
        answertotal.map((answer) => {

          return (
            <div>
              <p>{answer.questionId}</p>
              <p>{answer.answerIndex}</p>
              <p>{answer.answer}</p>
              <p>{answer.isCorrect ? 'good job' : 'sorry'}</p>
            </div>
          )
        })
      }

      <Link to='/'><button onClick={handleRestart}>Restart</button></Link>
    </section>
  )
}



// restart: () => {
//   return initialState
// }

// questionId,
// answerIndex,
// question,
// answer: question.options[answerIndex],
// isCorrect: question.correctAnswerIndex == answerIndex