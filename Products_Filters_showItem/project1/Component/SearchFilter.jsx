import { useState } from "react"
import React from 'react'

function SearchFilter({onFilter, onSortOrderChange}){

    const [available, setAvailable] = useState('All')
    const [sortOrder, setSortOrder] = useState('ascending')


    const handleAvailableChange =(e) => {
        const selectedAvailable = e.target.value;
        
        // console.log(selectedAvailable);
        setAvailable(selectedAvailable)
        onFilter(selectedAvailable)

    }
     const handleSortOrderchange =(e) => {
        const selectedSort = e.target.value;
        console.log(selectedSort);
        setSortOrder(selectedSort)
        onSortOrderChange(selectedSort)
    }


    return(

        <div className='search-filter'>
            <label>Filter by Availability</label>
            <select value={available} onChange={handleAvailableChange}>
                <option value="All">All</option>
                <option value="In stock">In stock</option>
                <option value="Out of Stock">Out of stock</option>
            </select>
            <label>Sort by Price:</label>
            <select value={sortOrder} onChange={handleSortOrderchange}>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
                
            </select>
        </div>
    )
}

export default SearchFilter


