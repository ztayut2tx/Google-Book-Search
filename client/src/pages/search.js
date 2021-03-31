import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";


function Search() {
//setting initial state
    const [ results, setResults ] = useState([])
    const [ searchG, setSearch ] = useState()
  //below is where im having my errors which is annoying because its the most crucial part of the app. This is suppose to be the request to the API after a title is searched.  
    function SearchGoogle(query) {
        API.searchG(query)
            .then(res => setResults(res.data.items))
            .catch(err => console.log(err));
    }
//handles user inputed data
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch ({ [name]: value})

    };
//submits to googleapi
    function handleFormSubmit(event) {
        event.preventDefault();
        SearchGoogle(searchG);
    };
//this is the function to save a book to db.
    function saveForm (id, title, author,image,description,Link) {
        const stagedBook = results.filter(result => result.id === id)
        const [ storeBooks] = stagedBook;
        const [ authors ] = storeBooks.volumeInfo.authors;
        API.saveBook( {
            id: id,
            title: title,
            authors: authors,
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