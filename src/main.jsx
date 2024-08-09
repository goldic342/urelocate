import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import HomePage from './pages/homePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <HomePage />
  </StrictMode>
)
