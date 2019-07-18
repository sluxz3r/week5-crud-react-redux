import React, { Component } from 'react';
import '../assets/HomePage.css'
import { Link } from 'react-router-dom';

import Search from '../Components/Search';
import Slide from '../Components/test';


class HomePage extends Component {
    render() {
        return (
                <div>
                    <Search />
                    <Link to='/books/'>
                    <button className='all'>All Books</button>
                    </Link>
                    <Slide />
                  
                </div>
        );
    }
};


export default HomePage;