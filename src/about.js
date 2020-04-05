import React from 'react'
import { render } from 'react-dom'
import './scss/about.scss'

const About = () => {
  return (
    <div>
      <h1>About Webpack!</h1>
    </div>
  )
}
render(
  <About />,
  document.getElementById('root')
)
