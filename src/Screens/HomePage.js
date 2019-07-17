import React, { Component } from 'react';

import Search from '../Components/Search';
import BookList from '../Components/BookList';


class HomePage extends Component {
    render() {
        return (
                <div>
                    <Search />
                    <BookList />
                </div>
        );
    }
};


export default HomePage;