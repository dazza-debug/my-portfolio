import './App.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Biography from '../../components/Biography/Biography';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

// this works if you want to use it
// function fancyScroll () {
//   if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//     document.getElementById("navigation").style.height = "80px"
//   }
//   else{
//     document.getElementById("navigation").style.height = "150px"
//   }
// }

const App = () => {
  return (
    <div  className="App">
      <Navigation />
      <Header />
      {/*Async Components*/}
      <Biography />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;