
import * as ActionTypes from '../common/ActionTypes';

export function addBook(book){
  return {type: ActionTypes.CREATE_BOOK, book};
}
