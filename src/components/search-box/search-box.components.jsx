import React from "react";
import "./search-box.styles.css"

export const Search = ({placeholder, handleChange}) => {
    return(
        <input type="search" className="search" onChange={handleChange} placeholder={placeholder}/>
    )
}