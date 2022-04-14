import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import ('../views/HomePage'  
/* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import ('../views/MoviesPage/MoviesPage'  
/* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import ('../views/MovieDetailsPage/MovieDetailsPage'  
/* webpackChunkName: "movies-detail-page" */))

export const App = () => {
  return (
    <div>
      <Navigation />
        
     <Suspense fallback={<h1>Loading ...</h1>}>
     <Routes>
        <Route 
        path="/" 
        element={<HomePage />}>        
        </Route>  

        <Route 
        path="/movies" 
        element={<MoviesPage />}>        
        </Route>  

        <Route 
        path="/:moviesId" 
        element={<MovieDetailsPage />}>
        </Route>  

        <Route 
        path="/movies/:moviesId/*" 
        element={<MovieDetailsPage />}>      
        </Route>      

      </Routes>
     </Suspense>
    </div>
  );
};
