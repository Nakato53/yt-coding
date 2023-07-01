import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DarkModeButton from './DarkModeButton.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <DarkModeButton></DarkModeButton>
      <div className='text-black dark:text-white'>TEST TEXT DARK MODE</div>
    </App>
  </React.StrictMode>,
)
