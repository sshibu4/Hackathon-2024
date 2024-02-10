import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatAssistant from './ChatAssistant'
//import './index.css'
import ViewCurrentList from './Pages/ViewCurrentList.jsx'
import MainPage from './Pages/MainPage'
import App from './App'
import ModifyList from './Pages/ModifyList'
import AddItems from './Pages/AddItems'
import RemoveItems from './Pages/RemoveItems'
import Login from './Login'
import Register from './Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
