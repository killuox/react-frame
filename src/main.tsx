import React from 'react'
import ReactDOM from 'react-dom/client'
import { CoreComponentConfig } from './config/coreComponentConfig';
import App from './App'
import './index.css'

CoreComponentConfig.init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
