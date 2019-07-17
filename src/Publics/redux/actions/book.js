import axios from 'axios';

export const getBooks = () => {
    return {
        type: 'GET_BOOKS',
        payload: axios.get('http://localhost:6969/')
    }
};

export const getBook = (bookid) => {
    return {
        type: 'GET_BOOK', bookid,
        payload: axios.get(`http://localhost:6969/${bookid}`)
    }
    
};

export const postBook = (data) => {
    return {
        type: 'POST_BOOK',
        payload: axios.post(`http://localhost:6969/`, data)
    }
    
};

export const deleteBook = (bookid) => {
    return {
        type: 'DELETE_BOOK', bookid,
        payload: axios.delete(`http://localhost:6969/${bookid}`)
    }
    
};




export const addBook = (data) => {
    return {
        type: 'ADD_BOOK', data,
        payload: axios.post('http://localhost:6969/', data)
    }
};

console.log(getBook);