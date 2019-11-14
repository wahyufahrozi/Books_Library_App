import Axios from "axios";

export const getLibrary = () => {
  return {
    type: "GET_LIBRARY",
    payload: Axios.get("http://localhost:8000/api/library")
  };
};

export const getGenre = () => {
  return {
    type: "GET_GENRE",
    payload: Axios.get(`http://localhost:8000/api/library/genre`)
  };
};
export const getbookbyGenre = genre => {
  return {
    type: "GET_BOOK_BY_GENRE",
    payload: Axios.get(`http://localhost:8000/api/library/genres/${genre}`)
  };
};
export const getStatus = () => {
  return {
    type: "GET_STATUS",
    payload: Axios.get(`http://localhost:8000/api/library/Allstatus/status`)
  };
};
export const getbbookbyID = id => {
  return {
    type: "GET_BOOK_ID",
    payload: Axios.get(`http://localhost:8000/api/library/${id}`)
  };
};

export const addBook = () => {
  return {
    type: "POST_BOOK",
    payload: Axios.post(`http://localhost:8000/api/library`)
  };
};
export const gettitle = title => {
  return {
    type: "GET_TITLE",
    payload: Axios.get(`http://localhost:8000/api/library/search/${title}`)
  };
};

export const editBook = id_book => {
  return {
    type: "PUT_BOOK",
    payload: Axios.put(`http://localhost:8000/api/library/edit/${id_book}`)
  };
};

export const deleteBook = id_book => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.put(`http://localhost:8000/api/library/edit/${id_book}`)
  };
};
