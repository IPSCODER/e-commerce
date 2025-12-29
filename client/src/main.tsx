import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import "./index.css"
import { QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import AppProviders from './app/providers/AppProvider'
import { queryClient } from './lib/queryClient'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
    <QueryClientProvider client={queryClient}>
    <Toaster/>
      <App/>
      </QueryClientProvider>
    </AppProviders>
  </React.StrictMode>
)
