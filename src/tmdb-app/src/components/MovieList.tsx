import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../store/movieStore';
import { Link } from 'react-router-dom';

const TMDB_API_KEY = 'b6f72a9e19717b2ac2e2d60143e16842'; // replace with your TMDb key

export default function MovieList() {
  const ctx = useContext(MovieContext);
  if (!ctx) return null;

  const { movies, filter } = ctx;

  (useEffect as any)(() => {
    if (movies.value.length > 0) return;
    (async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        movies.value = data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          year: new Date(m.release_date).getFullYear(),
          genre: m.genre_ids.join(', '),
          poster: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
          overview: m.overview,
          votes: 0,
        }));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const filtered = movies.value.filter((m: any) =>
    m.title.toLowerCase().includes((filter.value || '').toLowerCase())
  );

  console.log(movies.value);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <input
        placeholder="Filter..."
        className="border p-2 mb-4 w-full"
        value={filter.value}
        onChange={e => (filter.value = e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((m: any) => (
          <Link key={m.id} to={'/movies/' + m.id} className="block border rounded overflow-hidden hover:shadow-lg">
            <img src={m.poster} alt={m.title} className="w-full h-64 object-cover" />
            <div className="p-2 font-bold">{m.title} ({m.year})</div>
            <div className="p-2 text-sm text-gray-500">{m.genre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
