import React, { Component } from 'react';
import Books from '../Components/BooksList';
import BookForm from '../Components/BookForm';


class ListBook extends Component {
    render() {
        return (
            <div>
                <Books />
                <BookForm />
                
            </div >
        );
    }
};


export default ListBook;