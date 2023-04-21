import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilm = {
  filmTitle: 'The Grand Budapest Hotel',
  genreFilm: 'Drama',
  releaseYearFilm: 2014,
};

root.render(
  <React.StrictMode>
    <App nameFilm={promoFilm.filmTitle} genreFilm={promoFilm.genreFilm} releaseYearFilm={promoFilm.releaseYearFilm}/>
  </React.StrictMode>,
);
