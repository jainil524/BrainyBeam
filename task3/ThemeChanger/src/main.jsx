import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '/public/css/index.css'
import { ThemeProvider } from './Themes/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
