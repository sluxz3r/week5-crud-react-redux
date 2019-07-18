import React, {Component} from 'react';
import '../assets/nav.css';

class Nav extends Component {
  render () {
    return (
        <div className='nav'>
         <a href='/'><button>BOOKS</button></a>
        </div>
    );
  }
}

export default Nav;
