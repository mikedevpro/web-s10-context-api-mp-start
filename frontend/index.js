import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { QuoteProvider } from './context/quotesContext'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <QuoteProvider>
    <App />
  </QuoteProvider>
)
