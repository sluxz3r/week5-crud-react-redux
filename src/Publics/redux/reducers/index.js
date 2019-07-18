import {combineReducers} from 'redux';

import book from './book';
import borrow from './borrow';

const appReducer = combineReducers({
  book,
  borrow
});

export default appReducer;
