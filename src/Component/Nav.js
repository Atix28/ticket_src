import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="orange darken-3">
    <div className="nav-wrapper">
    <a href="/" className="brand-logo center">GetTrain</a>
      <a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
     
      <ul id="nav-mobile" className="right hide-on-small-only">
        <li><Link to="/"><i className="fas fa-sign-in-alt"></i>  Log In</Link></li>
        <li><Link to="/"><i className="fas fa-user-plus"></i>  Sign Up</Link></li>
      </ul>
    </div>
   
  </nav>

  <ul className="sidenav" id="main-menu">
  <li><Link to="/"><i className="fa fa-train"></i> Home</Link></li>
  <li><Link to="/prices"><i className="fa fa-tags"></i>See Prices</Link></li>
  <li><Link to="/buy"><i className="fa fa-money"></i>Buy Tickets</Link></li>
  <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
  
  </ul>
            </div>
        )
    }

}




export default Nav;