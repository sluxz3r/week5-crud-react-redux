import React, { Component } from 'react';
import '../assets/HomePage.css'
import { Link } from 'react-router-dom';

import Slide from '../Components/test';


class HomePage extends Component {
    render() {
        return (
                <div>
                    <Link to='/books/'>
                    <button className='all'>All Books</button>
                    </Link>
                    <Slide />
                  
                </div>
        );
    }
};


export default HomePage;