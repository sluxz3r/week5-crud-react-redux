import {combineReducers} from 'redux';

import book from './book';

const appReducer = combineReducers({
  book,
});

export default appReducer;
