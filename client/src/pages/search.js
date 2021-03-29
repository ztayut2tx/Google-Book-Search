import React, { useState} from "react";
import Results from "../components/Results";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

function Search() {

    const [search, setSearch] = useState()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch ({ [name]: value})

    };


    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className= "lead">Book</p>
                <form>
                    <Input />
                        onChange={handleInputChange}
                    <FormBtn />
                </form>
            </Jumbotron>
            <Results />
        </div>
    );
}

export default Search;