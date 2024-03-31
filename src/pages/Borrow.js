import React, { useState } from "react";
import axios from "axios";

const Borrow = () => {
  const [bookId, setBookId] = useState("");
  const [borrowerName, setBorrowerName] = useState("");
  const [borrowed, setBorrowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBorrow = async () => {
    try {
      // Call your API endpoint to borrow the book
      const response = await axios.post("/api/borrow", {
        bookId,
        borrowerName,
      });
      // Check if borrowing was successful
      if (response.status === 200) {
        setBorrowed(true);
      }
    } catch (error) {
      // Handle errors
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while borrowing the book.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8 w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Borrow a Book</h2>
        {borrowed ? (
          <p className="text-center">Book successfully borrowed!</p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter Book ID"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Enter Borrower Name"
              value={borrowerName}
              onChange={(e) => setBorrowerName(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md mb-4 w-full"
            />
            <button
              onClick={handleBorrow}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Borrow
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Borrow;
