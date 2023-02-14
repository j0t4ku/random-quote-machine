import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from './components/Container'
import Body, { Context } from './components/Body'
import QuoteBox from './components/QuoteBox'
import CreditBox from './components/CreditBox'

function App() {
  return (
    <div className="App">
      <div>
        <Body>
        <Container>
          <QuoteBox />
          <CreditBox />
        </Container>
        </Body>
      </div>
    </div>
  )
}

export default App
