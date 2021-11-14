import React, { useContext } from 'react'
import { searchTaskValueContext } from './App'

export default function Search() {
    const { handleSearchValueChange, searchTaskValue } = useContext(searchTaskValueContext)
    return (
        <>
        <input type="text" className="search-bar" placeholder="Search" onChange={(e) => handleSearchValueChange(e.target.value)} value={searchTaskValue} />
        </>
    )
}
