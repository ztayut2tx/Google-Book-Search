import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";


function Search() {

    const [ results, setResults ] = useState([])
    const [ books, setBooks ] = useState()
    
    function SearchGoogle(query) {
        API.books(query)
            .then(res => setResults(res.data.items))
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setBooks ({ [name]: value})

    };

    function handleFormSubmit(event) {
        event.preventDefault();
        SearchGoogle(books);
    };

    function saveForm (id, title, author,image,description,Link) {
        const stagedBook = results.filter(result => result.id === id)
        const [ storeBooks] = stagedBook;
        const [ authors ] = storeBooks.volumeInfo.authors;
        API.saveBook( {
            id: id,
            title: title,
            authors: author,
            image: image,
            description: description,
            link: Link,
        }).then(alert("Book has been saved to your list")).catch(err => console.log (err))
    }


    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className= "lead">Book</p>
                <form>
                    <Input  onChange={handleInputChange} />
                    <FormBtn onClick={handleFormSubmit} />
                </form>
            </Jumbotron>
                <p className="lead">Results</p>
                <Jumbotron>
                    {results.length ? (
                        <ul className="list-group">
                            {results.map(result => (
                                <li className="list-group-item" key={result.id}>
                                    
                                    <p className="lead d-inline">{result.volumeInfo.title} written by {result.volumeInfo.authors}</p>
                                    
                                    <SaveBtn onClick={() => saveForm(result.id)}  />
                                    
                                    <a className="btn btn-success mr-1" style={{ float: "right" }} href={result.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">View</a>
                                    
                                    <img src={result.volumeInfo.imageLinks.Thumbnail} className="img-thumbnail float-left mr-3" alt="searchedBook"></img>
                                    
                                    <p className="lead">{result.volumeInfo.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>Search a Book</h3>
                    )}   
                </Jumbotron>
           
        </div>
    );
}
                


export default Search;