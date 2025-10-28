import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';
import ErrorPage from './pages/error';
import Tester from './pages';
import createRoutes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createRoutes();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tester />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

function B() {
  const [name, setName] = useState('John Soatra');
  const [age, setAge] = useState(0);
  const [job, setJob] = useState({ title: 'test' });
  const navigate = useNavigate();

  return null;
}

root.render(
    <BrowserRouter>
      <B />
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
