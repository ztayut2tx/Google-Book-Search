import React from "react";
import Results from "../components/Results";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

function Search() {
    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className= "lead">Book</p>
                <form>
                    <Input />
                    <FormBtn />
                </form>
            </Jumbotron>
            <Results />
        </div>
    );
}

export default Search;