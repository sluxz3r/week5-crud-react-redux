import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../Publics/redux/actions/book';


class Books extends Component {
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
        const { books } = this.state;
        const list = books.bookList;
        console.log(list);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Book Name</th>
                            <th>Writer</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {list &&
                        list.result.length > 0 &&
                        list.result.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.writer}</td>
                                        <td><img className="avatar" src={item.image} alt="Merchant Avatar"
                                            style={{
                                                width: '50px',
                                                height: '50px'
                                            }} /></td>
                                        <td>{item.category}</td>
                                        <td>{item.location}</td>
                                        <td>Tersedia</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
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