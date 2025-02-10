import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './App.css';

import Hello from './Components/Hello';

function Greet() {

 return (    
   <div><Hello />
   </div>
    
  )
}

export default Greet;

