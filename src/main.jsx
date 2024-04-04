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
    font-family: var(--family);
    font-weight: normal;
    font-size: var(--fs-md);
    color: var(--dark);
  }

  :root {
    --family: "Inter", sans-serif;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 34px;
    --bg-gray: #EFF2F1;
    --bg-green: #3B5D50;
    --white: #FFF;
    --orange: #F9BF29;
    --dark: #2F2F2F;
    --gray: #6A6A6A;
    --medium: 500;
    --semi-bold: 600;
    --lh-sm: 22px;
    --lh-md: 24px;
    --lh-lg: 28px;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>,
)
