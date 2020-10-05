import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/components/content.scss";
import background from "../images/Background.jpg"

const Content = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("Harry Potter");
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`,
            );
       
            setBooks(result.data.items);
          };
        fetchData();
    }, [query]);

    return(
        <div className="content">
          <div className="contentFormBox">
            <input type="text" name="searchedValue"></input>
            <button onClick={(e) => {
                e.preventDefault();
                setQuery(document.querySelector("input").value)}
            }>Search</button>
          </div>
            <div className="contentContainer">
            {books.map(book =>{
                return(
                    <div className="contentBook" key={book.id}>
                        <div className="contentBookDescription">
                            <h3 className="contentBookDescriptionTitle">
                            {book.volumeInfo.title}
                            </h3>
                            <h5 className="contentBookDescriptionTitle">{book.volumeInfo.publisher} {book.volumeInfo.publishedDate}</h5>
                            <p className="contentBookDescriptionInfo">
                            {book.volumeInfo.description === undefined ? "There is no description" : `${book.volumeInfo.description.slice(0,200)}...`}
                            </p>
                            <a className="contentBookSource" href={book.accessInfo.webReaderLink} target="_blank" rel="noreferrer">Read</a>
                        </div>
                        <div className="contentBookCover">
                            <img 
                            src={book.volumeInfo.imageLinks === undefined ? "" :`${book.volumeInfo.imageLinks.thumbnail}`}     
                            className="contentBookFront"
                            alt="There is no front site of the book"
                            />
                            <img 
                            src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
                            className="contentBookBack"
                            alt="There is no front side of the book" 
                            />
                        </div>
                   </div>
                )
            })}
            </div>
        </div>
    )
}

export default Content;