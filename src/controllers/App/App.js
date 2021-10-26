import './App.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Biography from '../../components/Biography/Biography';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import ToTop from '../../components/ToTop/ToTop';

// this works if you want to use it
function makeToTopVisible () {
  if(!document.getElementById("totop"))
  {
    return;
  }

  console.log('working?');
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("totop").classList.add('totop-main-visible');
  }
  else{
    document.getElementById("totop").classList.remove('totop-main-visible');
  }
}

const App = () => {
  return (
    <div onWheel={makeToTopVisible} className="App">
      <Navigation />
      <Header />
      {/*Async Components*/}
      <Biography />
      <Portfolio />
      <Contact />
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;