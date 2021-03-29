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
            <Results />
        </div>
    );
}

export default Search;