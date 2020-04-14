/* eslint-disable indent */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {quiz} from '../reducers/quiz'

export const CurrentQuestion = () => {
 const dispatch = useDispatch()
 const [answer, setAnswer] = useState("")

 const handleOnSubmit = e => {
  // Prevent page reload
  e.preventDefault();

  dispatch(
    quiz.actions.submitAnswer({
      questionId: 1,
      answerIndex: answer
    })
  )};

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const userDone = useSelector((state) => state.quiz.quizOver)
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }


  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option) => {
        return (
        <button type="submit">{option}</button>
        )
      })}
     
      {userDone ?  <Link to="/resultPage"><Button info="ResultPage" /> 
      </Link> : <Link to={`/questions/${question.id}`}><Button info="next question" /></Link> }
    
    </form>
  )
}