import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import LogoFavorite from './components/LogoFavorite';
import PhotosList from './components/PhotosList';
function App() {

  return (
    <>
      <main>
        <LogoFavorite/>
        <Header/>
        <PhotosList/>
        <Footer/>
      </main>
    </>
  );
}

export default App
