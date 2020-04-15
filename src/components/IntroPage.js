import React from 'react'
import {Link} from 'react-router-dom'
import './intropage.css'

export const IntroPage = () => {
  return (
    <main className="mainContainer">
      <h1>Flag quiz</h1>
      <p>Do you know your flags? Match the right flag with the right country. Take the quiz!</p>
      <Link to={`/questions/01`}>
        <button>Start</button>
      </Link>
    </main>
  )
}