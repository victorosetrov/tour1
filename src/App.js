import logo from './logo.svg';
import './App.css';
import Tour from  './components/Tour'
import Tours from  './components/Tours'

function App() {
  var authors = [
    {
      author:"Viktor Osetrov",
      tour:"Exploring Wexford",
      cost:100
    },
    {
      author:"Robert Osetrov",
      tour:"Exploring Waterford",
      cost:250
    },
    {
      author:"Aliia Musina",
      tour:"Exploring Waterford",
      cost:330
    },
  ]

 {
    return (
      <div>
        <Tours authors={authors} />
      </div>
    );
  } 

}

export default App;
