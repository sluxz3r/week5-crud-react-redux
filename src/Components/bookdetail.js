import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Publics/redux/actions/book';
import { NavLink } from 'react-router-dom';
import Borrow from '../Components/borrow';

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
        const image = list ? list.image : '';
        const name = list ? list.name : '';
        const status = list ? list.status_borrow : '';
        const writer = list ? list.writer : '';
        const des = list ? list.des : '';
        console.log(status)

        return (
            <div>
                <div className='atas'>
                </div>
                <img className='gambar1' src={image} alt="gambar" />
                <div className='book'>
                    <NavLink to="/"><button 
                        style={{
                        color: 'white',
                        backgroundColor: 'black',
                        marginBottom: '10px',
                        width: '100px'
                    }}>Back</button>
                    </NavLink>

                  {status == 1 ? "" : <Borrow />}

                    {status == 1 ? (
                        <button  style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginBottom: '10px',
                            width: '100px'
                        }}>
                            No Stock
                        </button>) : (
                        <button  style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginBottom: '10px',
                            width: '100px'
                        }} >
                            Available
                        </button>
                    )}

                </div>
                <img className='gambar2' src={image} alt="gambar" />
                <div className='text-besar'>
                    <h1 className="titel">{name}</h1>
                    <p className="desc">Karya : {writer}</p>
                    <p className="desc">{des}</p>
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