import { combineReducers } from "redux";

import {
  Library,
  getbookbyID,
  addBook,
  editBook,
  getGenre,
  getStatus,
  getbookbyGenre,
  gettitle
} from "./library";

const appReducer = combineReducers({
  Library,
  getbookbyID,
  addBook,
  editBook,
  getGenre,
  getStatus,
  getbookbyGenre,
  gettitle // pokemons: pokemons // namaReducer: namaImport
});

export default appReducer;
