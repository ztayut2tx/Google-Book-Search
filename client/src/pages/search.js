import React, { useState} from "react";
import Results from "../components/Results";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/api";


function Search() {

    const [search, setSearch] = useState()
    const [results, setResults] = useState([])
    
   

    function searchGoogle(query) {
        API.search(query)
            .then(res => setResults(res.data))
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch ({ [name]: value})

    };

    function handleFormSubmit(event) {
        event.preventDefault();
        searchGoogle(search);
    };

    function saveForm (id) {
        const stagedBook = results.filter(result => result.id === id)
        const [ authors ] = bookObj.volumeInfo.authors;
        const [ storeBooks] = stagedBook;
        
        api.saveBook({
            title: storeBooks.title,
            authors: storeBooks.authors,
            image: storeBooks.volumeInfo.imageLinks.smallThumbnail,
            description: storeBooks.volumeInfo.description,
            link: storeBooks.volumeInfo.infoLink
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
                                    
                                    <SaveBtn onClick={() => saveForm(result.id,result.volumeInfo.title, result.volumeInfo.description, result.volumeInfo.thumbnail, result.volumeInfo.previewLink)}  />
                                    
                                    <a className="btn btn-success mr-1" style={{ float: "right" }} href={result.volumeInfo.infoLink} target="_blank" rel="noreferrer">View</a>
                                    
                                    <img src={result.volumeInfo.imageLinks.smallThumbnail} className="img-thumbnail float-left mr-3" alt="searchedBook"></img>
                                    
                                    <p className="lead">{result.volumeInfo.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>Search a Book</h3>
                    )}   
                </Jumbotron>
            </Jumbotron>
        </div>
    );
}
                


export default Search;