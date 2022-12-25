import {Link} from 'react-router-dom';

function Nav(){
    return(
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
    )
}

export default Nav;