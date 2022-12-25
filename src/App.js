
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}
  from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from "./components/About"
import PageNotFound from "./components/PageNotFound"
import Nav from "./Nav"
import User from "./components/User"

function App() {
  let users = [
    { id: 1, name: "Suraj", email: "suraj@test.com" },
    { id: 2, name: "Amar", email: "Amar@test.com" },
    { id: 3, name: "Bipat", email: "Bipat@test.com" },
    { id: 4, name: "Rohan", email: "Rohan@test.com" },
    { id: 7, name: "Rohit", email: "Rohit@test.com" },
    { id: 12, name: "Rajiv", email: "Rajiv@test.com" }
  ]
  return (
    <div className="App">
      <Nav />
      {
        users.map((item) => <><div><Link to={"/user/" + item.id+"/"+item.name}><h3>{item.name}</h3></Link></div></>)
      }
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/user/:userId/:name' element={< User />}></Route>
        <Route exact path='/*' element={< PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
