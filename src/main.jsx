import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js' 
import { TodosApp } from './TodosApp'
// import { PokemonApp } from './PokemonApp.jsx'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>  
      <TodosApp />
    </Provider>
  </React.StrictMode>,
)
