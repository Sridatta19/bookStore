
import {List, Map, Record} from 'immutable';
import {CREATE_BOOK, DELETE_BOOK, EDIT_BOOK} from '../common/ActionTypes';

const initialState = [{
    title: 'The Shining',
    author: 'Stephen King',
    publisher: 'Harper Collins',
    id: 0
}];

export default function books(state = initialState, action) {
  switch(action.type){
    case CREATE_BOOK:
      return [{
        id: state.reduce((maxId, book) => Math.max(book.id, maxId), -1) + 1,
        title: action.book.title,
        author: action.book.author,
        publisher: action.book.publisher
      }, ...state];
    case DELETE_BOOK:
    return state.filter(book =>
      book.id !== action.id
    );
    case EDIT_BOOK:
      return state.map(book =>
        book.id === action.id ?
          Object.assign({}, book, { title: action.book.title,
              author: action.book.author,
              publisher: action.book.publisher }) :
          book
      );
    default:
      return state;
  }
}
