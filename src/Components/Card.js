import React from "react";
import '../assets/card.css';
import Whirligig from 'react-whirligig';
import { Link } from 'react-router-dom';

const Cards = ({ list }) => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()
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
                                        {data.status_borrow == 1 ? (
                                        <p className='status'>Not Available</p>
                                        ) : (
                                        <p className='status'>Available</p>
                                        )}
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

export default Cards;