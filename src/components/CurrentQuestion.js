import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from './Button'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }


  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <Link to={`/resultPage`}>
      <Button info="ResultPage" />
      </Link>
    </div>
  )
}
