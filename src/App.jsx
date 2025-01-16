import './App.css'

import LogoFavorite from './components/LogoFavorite';
import PhotosList from './components/PhotosList';
import PhotoFavorites from './components/PhotoFavorites';
import PhotoDetails from './components/PhotoDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Router>
          <LogoFavorite />
          <Routes>
            <Route path='/' element={<PhotosList />} />
            <Route path='/favorites' element={<PhotoFavorites />} />
            <Route path='/details/:id' element={<PhotoDetails />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App
