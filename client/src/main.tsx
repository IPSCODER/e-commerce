import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import "./index.css"
import App from './App'
import AppProviders from './app/providers/AppProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App/>
    </AppProviders>
  </React.StrictMode>
)
