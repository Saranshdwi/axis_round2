// ReturnBook.js (component for returning a book)
import React, { useState } from "react";
import axios from "axios";

const ReturnBook = () => {
  const [book, setBook] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      book,
      user,
    };

    await axios.post("/api/return", data);

    alert("Book returned successfully!");
  };

  return (
    <div>
      <h1>Return a Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book">Book:</label>
        <input
          type="text"
          id="book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />

        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input type="submit" value="Return" />
      </form>
    </div>
  );
};

export default ReturnBook;
