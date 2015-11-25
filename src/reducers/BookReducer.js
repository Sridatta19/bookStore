
import {List, Map, Record} from 'immutable';
import {CREATE_BOOK, DELETE_BOOK, EDIT_BOOK} from '../common/ActionTypes';
import R from 'ramda';

const initialState = [{
    title: 'The Shining',
    author: 'Stephen King',
    publisher: 'Harper Collins',
    id: 0
}];

const maxId = R.reduce((maxId, book) => Math.max(book.id, maxId), -1);
const filterBooks = (actionId, book) => book.id != actionId;
const editBook = (action) => R.merge(R._, { title: action.book.title, author: action.book.author,
  publisher: action.book.publisher })

export default function books(state = initialState, action) {
  switch(action.type){
    case CREATE_BOOK:
      return R.append({
        id: maxId(state) + 1, title: action.book.title, author: action.book.author,publisher: action.book.publisher
      }, state);
    case DELETE_BOOK:
      debugger;
      return R.filter(R.curry(filterBooks)(action.id), state);
    case EDIT_BOOK:
      return R.map(book => book.id === action.id ? R.curry(editBook)(action))(state);
    default:
      return state;
  }
}
