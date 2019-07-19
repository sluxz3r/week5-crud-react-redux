const initialState = {
    bookList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};
//manage state 
const book = (state = initialState, action) => {
    switch (action.type) {
        // GET ALL BOOKS
        case 'GET_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_BOOKS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_BOOKS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookList : action.payload.data.result,
            };

        // GET BOOK BY ID
        case 'GET_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookList : action.payload.data.result,
            };

        //Post Book
        case 'POST_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'POST_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookList: [state.bookList, action.payload.data[0]]
            };

        //Update Book By ID
        case 'UPDATE_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'UPDATE_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
        };
        case 'UPDATE_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookList: [state.bookList, action.payload.data[0]]
        };
        //Delete Book By ID
        case 'DELETE_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'DELETE_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'DELETE_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookList: [state.bookList, action.payload.data[0]]
            };
    
        default:
            return state;
    }
};

export default book;