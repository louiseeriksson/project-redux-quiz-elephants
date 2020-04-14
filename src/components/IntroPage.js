import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './intropage.css'

export const IntroPage = () => {
  return (
    <main>
    <p>INTROPAGE</p>
    <Link to={`/questions/01`}>
    <Button info="IntroButton" />
  </Link>
    </main>
  )
}