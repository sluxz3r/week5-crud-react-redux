import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/BookList.css';
import Whirligig from 'react-whirligig'


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
        let whirligig
        const next = () => whirligig.next()
        const prev = () => whirligig.prev()

        const { books } = this.state;
        const list = books.bookList;
        console.log(list);
        return (
            <div className='atas'>
                <div className='container'>
                    <Whirligig
                        visibleSlides={5}
                        gutter="1em"
                        ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                    >
                        {list &&
                            list.length > 0 &&
                            list.map((data, index) => {
                                return (
                                    <div className='get-all' key={index}>
                                        <Link to={`/book/${data.bookid}`}>
                                            <img className='image-all' src={data.image} alt='ah' />
                                        </Link>
                                        <h6 className='name'>{data.name}</h6>
                                        <p className='writer'>By : {data.writer}</p>
                                        <p className='status'>Tersedia</p>
                                    </div>
                                )
                            })}
                    </Whirligig>
                    <div className='button-next'>
                        <button style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginRight: '10px'
                        }}
                            onClick={prev}>Prev</button>
                        <button style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginRight: '10px'
                        }}
                            onClick={next}>Next</button>
                    </div>
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