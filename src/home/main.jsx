import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './home.jsx'
import '../../index.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Navbar />
    <App />
    <Footer />
    
  </React.StrictMode>,
)
