import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import App from './App.jsx'
import './index.css'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: 16px;
    color: #2F2F2F;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>,
)
