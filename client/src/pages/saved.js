import React, { useEffect, useState } from "react";
import SavedBooks from "../components/SavedBooks";
import Jumbotron from "../utils/Jumbotron";
import Api from "../utils/Api";

function Saved() {

    const [books, setBooks] =useState([])

    useEffect(() => { popBooks()}, [])

    function popBooks () {
        Api.getBook().then(res => setBooks(res.data)).catch(err => console.log(err))
    };

    function deleteBook(id) {
        Api.deleteBook(id).then(res => popBooks()).catch(err => console.log(err))
    };

    
    return(
        <div>
            <p className="lead">Your Saved Books</p>
                <Jumbotron>
                    {books.length ? (
                        <ul className="list-group">
                            {books.map(book => (
                                <li className="list-group-item" key={book.id}>
                                    
                                    <p className="lead d-inline">{book.title} written by {book.authors}</p>
                                    
                                    <DeleteBtn onClick={() => deleteBook(book.id,book.title, book.description, book.thumbnail, book.previewLink)}  />
                                    
                                    <a className="btn btn-success mr-1" style={{ float: "right" }} href={book.infoLink} target="_blank" rel="noreferrer">View</a>
                                    
                                    <img src={book.img} className="img-thumbnail float-left mr-3" alt="oldBook"></img>
                                    
                                    <p className="lead">{book.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>No saved Books</h3>
                    )}   
                </Jumbotron>
        </div>
    );
}

export default Saved;