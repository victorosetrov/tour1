import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import ShoppingList from "./views/ShoppingList"


function App() {
  return (
    <Router>
        <div>
          <Navbar />
            <Routes>
              <Route exact path="/" element={
              <Home />
            }></Route>

            <Route path="/shopping_list" element={
              <ShoppingList />
            }></Route>
              
            </Routes>
        </div> 
    </Router>
  );
} 


export default App;
