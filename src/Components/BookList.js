import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

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
                <ul>
                    {list && 
                    list.result.length > 0 && 
                    list.result.map((data, index) =>{
                        return (
                            <Link to={`book/${data.bookid}`}>
                            <div 
                                key={index}
                                style={{
                                    border:'2px solid black',
                                    float:'left',
                                    height: '250px',
                                    margin: '5px 5px 5px 5px',
                                    justifyContent:'center',
                                }}
                            >
                                <img 
                                    src={data.image}
                                    alt='ah'
                                    style={{
                                        height:'100%',
                                        width:'200px',
                                    }}/>
                                    <h4>{data.name}</h4>
                                    <p>By : {data.writer}</p>
                                    <p>Tersedia</p>
                            </div>
                            </Link>
                        )
                    })}
                </ul>
                <Link to='/books/'>
                    <td>All</td>
                </Link>
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