const initialState = {
  LibraryData: [],
  counter: 0,
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

export const Library = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_LIBRARY_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_LIBRARY_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_LIBRARY_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};
export const gettitle = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_TITLE_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_TITLE_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_TITLE_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};

export const getbookbyID = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_BOOK_ID_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_BOOK_ID_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_BOOK_ID_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result[0]
      };

    default:
      return prevState;
  }
};
export const addBook = (prevState = initialState, action) => {
  switch (action.type) {
    case "POST_ADDBOOK_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "POST_ADDBOOK_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "POST_ADDBOOK_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};

export const editBook = (prevState = initialState, action) => {
  switch (action.type) {
    case "PUT_EDITBOOK_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "PUT_EDITBOOK_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "PUT_EDITBOOK_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result[0]
      };

    default:
      return prevState;
  }
};

export const getGenre = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_GENRE_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_GENRE_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_GENRE_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};
export const getbookbyGenre = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_BOOK_BY_GENRE_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_BOOK_BY_GENRE_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_BOOK_BY_GENRE_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};

export const getStatus = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_STATUS_PENDING":
      return {
        ...prevState,
        isFulfilled: false,
        isRejected: false,
        isLoading: true
      };
    case "GET_STATUS_REJECTED":
      return {
        ...prevState,
        isLoading: false,
        isRejected: true
      };
    case "GET_STATUS_FULFILLED":
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        LibraryData: action.payload.data.result
      };

    default:
      return prevState;
  }
};
