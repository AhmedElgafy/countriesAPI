import React from 'react'
import ReactDOM from 'react-dom/client'
import {Nav,Query} from './App'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Query/>
    {/* <List /> */}
  </React.StrictMode>,
)
