import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Book from './Book';
import"./Book.css";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetchHandler()
      .then((data) => setBooks(data.books))
      .catch((err) => console.error("Error fetching books:", err));
  }, []); // Add dependency array to run effect only once on mount

  console.log(books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
