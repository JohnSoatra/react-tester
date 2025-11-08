import React from 'react';
import useCurrent from 'react-use-current';

export const MovieContext = React.createContext<any>(null);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const movies = useCurrent<any[]>([]);
  const filter = useCurrent('');
  const value = { movies, filter };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
