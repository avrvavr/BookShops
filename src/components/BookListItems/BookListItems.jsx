import React from "react";
import { Link } from "react-router-dom";

function BookListItem({ book }) {
  return (
    <li>
      <Link to={`/books/${book.isbn13}`}>
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.subtitle}</p>
      </Link>
    </li>
  );
}

export default BookListItem;
