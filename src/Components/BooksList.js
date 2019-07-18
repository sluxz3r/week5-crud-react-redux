import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/BooksList.css';

import { getBooks, deleteBook } from '../Publics/redux/actions/book';

class Books extends Component {
    state = {
        index:'',
        books: [],
    };
    componentDidMount = async () => {
        await this.props.dispatch(getBooks());
        this.setState({
            books: this.props.book,
        });
    };

    deleteBook =  async (bookid) => {
        await this.props.dispatch(deleteBook(bookid));
       console.log(bookid)
    }
    
    render() {
        const { books } = this.state;
        const list = books.bookList;
        console.log(list);
        return (
            <div>
                <div className="table-div"></div>
                <h3 className="list-book">List All Books</h3>
                <table class="darkTable">
                    <thead>
                        <tr>
                            <th >No</th>
                            <th>Book Name</th>
                            <th>Writer</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {list &&
                        list.length > 0 &&
                        list.map((item, index) => {
                            return (
                    <tbody>
                        <tr key={index}>
                            <td style={{textAlign:'center'}}>{index + 1}</td> 
                            <td><a  style={{textDecoration:'none', color:'black'}} href={`/book/${item.bookid}`}>{item.name}</a></td>
                            <td>{item.writer}</td>
                            <td>{item.category}</td>
                            <td>{item.location}</td>
                            <td>Tersedia</td>
                            <td style={{textAlign:'center'}}>
                                <a href={`/books/${item.bookid}`}>
                                <button className='button1'>Edit</button>
                                </a>
                                <a href='/books/'>
                                    <button className='button2' onClick={() => this.deleteBook(item.bookid)}>Delete</button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                  
                            )
                        })}
                </table>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        book: state.book,
    };
};

export default connect(mapStateToProps)(Books);