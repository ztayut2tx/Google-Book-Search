import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import axios from "axios";
import Button from "react-bootstrap/Button"

//function to search for given book
function Search() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyBvlZKjvCDI1q78UsVQt8Ny8FyjTMcO0Oo")
   //takes in user inputed data
    function handleInputChange(event) {
        const book = event.target.value;

        setBook(book);
    }
    //submits user inputed data to API
    function handleFormSubmit(event) {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+ apiKey+"&maxResults=40")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        });
    }
//this is the function to save a book to db.
    function saveForm (id, title, author,image,description,Link) {
        const stagedBook = result.filter(result => result.id === id)
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
                <form onSubmit>
                    <Input  onChange={handleInputChange} />
                    <FormBtn onClick={handleFormSubmit} />
                </form>
            </Jumbotron>
                <p className="lead">Results</p>
                <Jumbotron>
                   {result.map(book => (
                       <a href={book.volumeInfo.title}>
                           <img src={book.volumeInfo.imagelinks} alt={book.title}/>
                           <br></br>
                           {book.volumeInfo.title}
                           <br></br>
                           by {book.volumeInfo.authors}
                           <br></br>
                           <br></br>
                           <Button className="saveBtn"
                            onClick={() => SaveBtn(
                            book.id, book.volumeInfo.title)}
                            variant="primary">Save
                        </Button>
                        
                        
                            
                        </a>
                   ))}
                </Jumbotron>
           
        </div>
    );
}
                


export default Search;