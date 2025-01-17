import './App.css'

import Header from './components/Header';
import Home from './components/Home';
import PhotoFavorites from './components/PhotoFavorites';
import PhotoDetails from './components/PhotoDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<PhotoFavorites />} />
            <Route path='/details/:id' element={<PhotoDetails />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App
