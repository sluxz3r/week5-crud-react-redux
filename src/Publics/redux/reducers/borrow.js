const initialState = {
	borrowList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false
};

const borrow = (state = initialState, action) => {
	switch (action.type) {		
		case 'POST_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'POST_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'POST_BORROW_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				borrowList: [state.borrowList, action.payload.data[0]]
			};
		default:
			return state;
	}
};

export default borrow;