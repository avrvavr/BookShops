import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookPage() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((book) => book.isbn13 === id)
  );

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.subtitle}</p>
    </div>
  );
}

export default BookPage;