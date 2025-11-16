import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Cart from "./components/Cart.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('modal')).render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
)