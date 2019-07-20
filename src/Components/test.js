import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/BookList.css';
import Cari from './cari';
import { getBooks } from '../Publics/redux/actions/book';

class Slide extends Component {
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
        return (
            <div className='atas'>
                <div>
                    <Cari data={this.state.books} />
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

export default connect(mapStateToProps)(Slide);