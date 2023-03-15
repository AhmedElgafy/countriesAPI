import React, { useState, useEffect } from 'react';
import Nav from "./Nav"
import Query from "./Queries"
import Cards from './Cards'

const App=()=>{
    const [filter,setFilter]=useState({region:undefined})
    const [searchInputPar,setSearchInput]=useState("")
    return(
        <>
            <Nav />
        </>
    )
}
export default App