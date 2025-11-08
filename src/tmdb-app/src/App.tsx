import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './store/movieStore';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

export default function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}
