import axios from 'axios';

export const postBorrow = (data) =>{
    return {
        type:'POST_BORROW',
        payload :axios.post(`http://localhost:6969/borrow`,data)
    }
}