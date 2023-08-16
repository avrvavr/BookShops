import axios from "axios";

export const fetchBooksRequest = () => ({
  type: "FETCH_BOOKS_REQUEST",
});

export const fetchBooksSuccess = (books) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: "FETCH_BOOKS_FAILURE",
  payload: error,
});

export const fetchBooks = () => {
    return (dispatch) => {
      dispatch(fetchBooksRequest());
  
      axios.get('https://api.itbook.store/1.0/new')
        .then(response => {
          const books = response.data.books;
          dispatch(fetchBooksSuccess(books));
        })
        .catch(error => {
          dispatch(fetchBooksFailure(error.message));
        });
    };
  };
