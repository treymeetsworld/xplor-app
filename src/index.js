import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss';
import App from './pages/App/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
