
import {CREATE_BOOK} from '../common/ActionTypes';

export function addBook(book){
  return {type: CREATE_BOOK, book};
}
