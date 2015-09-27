
import {CREATE_BOOK, EDIT_BOOK, DELETE_BOOK} from '../common/ActionTypes';

export function addBook(book){
  return {type: CREATE_BOOK, book};
}

export function deleteBook(id){
  return {type: DELETE_BOOK, id};
}

export function editBook(book){
  return {type: EDIT_BOOK, book};
}
