import './App.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Biography from '../../components/Biography/Biography';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      {/*Async Components*/}
      <Biography />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;