import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Publics/redux/actions/book';
import { NavLink } from 'react-router-dom';

import Borrow from '../Components/borrow';
import Restore from '../Components/restore';

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
        const bookid = this.props.match.params.bookid
        const list = books.bookList;
        const image = list ? list.image : '';
        const name = list ? list.name : '';
        const status = list ? list.status_borrow : '';
        const writer = list ? list.writer : '';
        const des = list ? list.des : '';

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
                    
                        {status == 1 ? (<Restore id={bookid} name={name} />) 
                        : (<Borrow id={bookid} />)}

                </div>
                <div>
                <img className='gambar2' src={image} alt="gambar" />
                {status == 1 ? (
                        <button style={{
                            color: 'white',
                            backgroundColor: 'red',
                            marginTop: '10px',
                            width: '120px',
                            marginLeft:'1130px',
                            borderRadius:'10px'
                        }}>
                            Not Available
                        </button>) : (
                            <button style={{
                                color: 'white',
                                backgroundColor: 'Blue',
                                marginTop: '10px',
                                width: '120px',
                                marginLeft:'1130px',
                                borderRadius:'10px'
                            }} >
                                Available
                        </button>
                        )}
                </div>
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