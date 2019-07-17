import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../assets/AddBook.css';

class AddBook extends Component{
    render() {
        return (
            <div className='component-add'>
              <Link to='/add/'>
                <button className='button-add' >Add</button>
              </Link>
          </div>
        )
    }
}

export default AddBook;