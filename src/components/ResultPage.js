import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { quiz } from '../reducers/quiz'
import './resultpage.css'


export const ResultPage = () => {
  const answertotal = useSelector((state) => state.quiz.answers)

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

      <Link><button></button></Link>
    </section>
  )
}




// questionId,
// answerIndex,
// question,
// answer: question.options[answerIndex],
// isCorrect: question.correctAnswerIndex == answerIndex