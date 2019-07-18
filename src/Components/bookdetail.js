import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Publics/redux/actions/book';
import {NavLink} from 'react-router-dom';

import '../assets/bookdetails.css';

class bookdetail extends Component {
    state = {
        books: [],
    };

    componentDidMount = async () => {
        const bookid = this.props.match.params.bookid
        await this.props.dispatch(getBook(bookid));
        this.setState({
            books: this.props.book,
        });
    };

    render() {
        const { books } = this.state;
        const list = books.bookList;

        return (
            <div>
                <div className='' >
                    <img className='gambar1' src={list ? list.image:''} alt="gambar" />
                    <div className='book'>
                        <NavLink to="/">Back</NavLink>
                        <button>Pinjam</button>
                    </div>
                    <img className='gambar2' src={list ? list.image:''} alt="gambar" />

                    <h1 className="titel">{list ? list.name:''}</h1>
                    <p className="desc">{list ? list.writer:''}</p>
                    <p className="desc">{list ? list.des:''}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.book,
    };
};

export default connect(mapStateToProps)(bookdetail);