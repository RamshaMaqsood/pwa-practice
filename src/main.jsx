import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import swDev from './swDev';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
    <App />
    </Router>
  // </StrictMode>,
)
swDev();