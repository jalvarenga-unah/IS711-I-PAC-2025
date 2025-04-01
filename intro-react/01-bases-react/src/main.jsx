
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx' // importamos el componente App

const container = document.getElementById('root') // instancia del elemento root

createRoot(container).render(

  <App />

)
