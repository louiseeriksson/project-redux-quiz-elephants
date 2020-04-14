/* eslint-disable react/self-closing-comp */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const userDone = useSelector((state) => state.quiz.quizOver)
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {userDone ?  <Link to="/resultPage"><Button info="ResultPage" /> 
      </Link> : <Link to={`/questions/${question.id}`}><Button info="next question" /></Link> }
    
    </div>
  )
}
