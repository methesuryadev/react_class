
import React from "react";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (  
    <div className="App">  
    <Router>
    <ul className="App-header">  
       <li>  
         <Link to="/">Home</Link>  
       </li>  
       <li>  
         <Link to="/about">About Us</Link>  
       </li>  
       <li>  
         <Link to="/contact">Contact Us</Link>  
       </li>  
     </ul>  
    <Routes>  
          <Route exact path='/' element={< Home />}></Route>  
          <Route exact path='/about' element={< About />}></Route>  
          <Route exact path='/contact' element={< Contact />}></Route>  
   </Routes>  
    </Router>    
   </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function About(){
  return(
    <div>
      <h1>About Page</h1>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default App;
