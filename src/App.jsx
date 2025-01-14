import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import LogoFavorite from './components/LogoFavorite';
import PhotosList from './components/PhotosList';
import PhotoFavorites from './components/PhotoFavorites';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Router>
          <LogoFavorite />
          <Header />
          <Routes>
            <Route path='/' element={<PhotosList />} />
            <Route path='/favorites' element={<PhotoFavorites />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App
