import React from "react";

function SavedBooks() {
    return (
        <div>
            <p className="lead d-inline">The Fellowship Of The Ring</p>
            <button className="btn btn-success" style={{ float: "right" }}>Delete</button>
            <button className="btn btn-success mr-1" style={{ float: "right" }}>View</button>
            <p className="lead">Written by J.R Tolkien</p>
            <img src="https://via.placeholder.com/200" className="img-thumbnail float-left mr-3" alt="Book"></img>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default SavedBooks;