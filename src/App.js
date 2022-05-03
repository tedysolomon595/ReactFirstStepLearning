import React from 'react'
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import Recipes from './Components/Pages/Recipes';
import Settings from './Components/Pages/Settings';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
      <Router>
         <NavBar/>
        <div className='container main'>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/recipes" element={<Recipes/>}/>
              <Route path="/settings" element={<Settings/>}/>
           </Routes>
        </div>
        <Footer/>
      </Router>     
  );
}

export default App;
