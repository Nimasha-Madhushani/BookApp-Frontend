import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
// const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios
    .get("http://localhost:5000/books")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchHandler()
      .then((data) => setBooks(data.books))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => {
            return (
              <div className="card">
                <li className="book" key={i}>
                  <Book book_props={book} />
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
