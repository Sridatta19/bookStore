
import Immutable from 'immutable';
import {CREATE_BOOK} from '../common/ActionTypes';

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
    default:
      return state;
  }
}
