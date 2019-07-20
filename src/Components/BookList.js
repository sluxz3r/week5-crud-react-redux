import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/BookList.css';

import {getBooks} from '../Publics/redux/actions/book';


class Book extends Component {
    state = {
        books: [],
    };
    componentDidMount = async () => {
        await this.props.dispatch(getBooks());
        this.setState({
            books: this.props.book,
        });
    };
    render() {
        const {books} = this.state;
        const list = books.bookList;
        console.log(list);
        return (
            <div>
                <div className='container'>
                    {list && 
                    list.result.length > 0 && 
                    list.result.map((data, index) =>{
                        return (
                            <div className='get-all' key={index}>
                                 <Link to={`/book/${data.bookid}`}>
                                <img className='image-all' src={data.image} alt='ah'/>
                                </Link>
                                    <h6 className='name'>{data.name}</h6>
                                    <p className='writer'>By : {data.writer}</p>
                                    <p className='status'>Tersedia</p>
                            </div>
                        )
                    })}
                  
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        book: state.book,
    };
};

export default connect(mapStateToProps)(Book);