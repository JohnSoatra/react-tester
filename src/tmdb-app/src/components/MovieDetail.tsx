import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MovieContext } from '../store/movieStore';

export default function MovieDetail() {
  const { id } = useParams();
  const ctx = useContext(MovieContext);
  if (!ctx) return null;

  const movie = ctx.movies.value.find((m: any) => m.id === Number(id));
  if (!movie) return <div>Movie not found</div>;

  const votes = movie.votes;

  console.log(movie);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 mb-2 inline-block">&larr; Back</Link>
      <h1 className="text-2xl font-bold">{movie.title} ({movie.year})</h1>
      <img src={movie.poster} alt={movie.title} className="my-4 w-full h-auto rounded" />
      <p>{movie.overview}</p>
      <div className="mt-4">
        <span className="font-bold mr-2">Votes:</span> {votes}
        <button
          className="ml-4 px-2 py-1 bg-green-500 text-white rounded"
          onClick={() => movie.votes++}
        >
          +1
        </button>
      </div>
    </div>
  );
}
