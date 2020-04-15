import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { quiz } from '../reducers/quiz'
import './resultpage.css'


export const ResultPage = () => {
  const answertotal = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()

  const questionTotal = useSelector((state) => state.quiz.questions.length)
  const questionComplete = answertotal.filter(item => item.isCorrect).length
  
  const handleRestart = () => {

    dispatch(quiz.actions.restart())
  }

  return (
    <section className='result-container'>
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
    </section>
  )
}

