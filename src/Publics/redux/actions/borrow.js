import axios from 'axios';

export const getBorrows = (bookid) => {
  return {
      type: 'GET_BORROW',
      payload: axios.get(`http://localhost:6969/lah/${bookid}`)
  }
}

export const postBorrow = (data) =>{
    return {
        type:'POST_BORROW',
        payload :axios.post(`http://localhost:6969/borrow`,data)
    }
}

export const updateBorrow = (data, bookid) => {
  console.log(bookid)
    return {
      type: 'UPDATE_BORROW',
      payload: axios.patch(`http://localhost:6969/borrow/${bookid}`,data),
    }
  };
