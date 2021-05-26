import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from './styles/GlobalStyle'

import Layout from './components/Layout'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  console.log("APp is here")
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  )
}

render(<App />, mainElement)
