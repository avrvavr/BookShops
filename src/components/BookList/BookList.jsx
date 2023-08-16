import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../actions/bookAction";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Импорт иконки для звезд

import "./BookList.css";

function BookList() {
  const booksPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const offset = (currentPage - 1) * booksPerPage;
  const currentBooks = books.slice(offset, offset + booksPerPage);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <ul className="book-list">
            {currentBooks.map((book, index) => (
              <li key={index}>
                <Link to={`/books/${book.isbn13}`}>
                  <div className="book-item">
                    <img src={book.image} alt={book.title} />
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-authors">{book.authors}</p>
                    <div className="book-details">
                      <p className="book-price">{book.price}</p>
                      <div className="book-rating">
                        {renderStars(parseFloat(book.rating))}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <ReactPaginate
            pageCount={Math.ceil(books.length / booksPerPage)}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      )}
    </div>
  );
}

export default BookList;