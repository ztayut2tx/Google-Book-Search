import React, { useEffect, useState } from "react";
import SavedBooks from "../components/SavedBooks";

function saveBook() {

    const [books, setBooks] =useState([])

    
    return(
        <div>
            <SavedBooks />
        </div>
    );
}

export default Saved;