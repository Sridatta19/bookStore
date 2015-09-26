
import { combineReducers } from 'redux';
import books from './BookReducer';

const storeApp = combineReducers({
    books
});

export default storeApp;
