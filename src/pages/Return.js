import React, { useState } from "react";

const Return = () => {
  const [books, setBooks] = useState([
    { id: 1, bookId: "B001", title: "Book 1", author: "Author 1" },
    { id: 2, bookId: "B002", title: "Book 2", author: "Author 2" },
    { id: 3, bookId: "B003", title: "Book 3", author: "Author 3" },
    // Add more books as needed
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchBook = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.bookId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8 w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Return a Book
        </h2>
        <input
          type="text"
          placeholder="Search by Title, Author, or ID"
          value={searchTerm}
          onChange={searchBook}
          className="border border-gray-300 px-4 py-2 rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <table className="table-fixed w-full mb-4">
          <thead>
            <tr>
              <th className="w-1/4 px-4 py-2">Book ID</th>
              <th className="w-1/4 px-4 py-2">Title</th>
              <th className="w-1/4 px-4 py-2">Author</th>
              <th className="w-1/4 px-4 py-2">Return</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{book.bookId}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Return;
