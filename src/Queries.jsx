import ReactDOM from 'react-dom/client'
import React, { useState, useEffect } from 'react';
import Cards from './Cards';
// var eleColor={background:"hsl(209, 23%, 22%)",
//                   color:"white"}

const Query=(props)=>{
    const [filter,setFilter]=useState({region:undefined})
    const [searchInputPar,setSearchInput]=useState("")
    //console.log(searchInputPar)
    const clicked=(e)=>{
      let region=e.target.text
      document.getElementById("dropDownValue").textContent= region
      if(region=="All"){
        document.getElementById("dropDownValue").textContent= "Filter by Region"
        region=undefined      
      }
      setFilter({region:region})
  
    }
    

    
                            //listening to search par input
  return(
    < >
    <div className='container my-5  mx-auto  queries' >
      <div className="row   row-cols-md-3 row-cols-sm-3 row-cols-1 mx-2 ">
          {/* searchBar */}
  
        <div className="  col d-flex rounded shadow-lg" style={props.eleColor}>
          
          <img src="../img/search.svg " alt="" style={{filter: "invert(60%)"}}  className="col"/> 
          <input  type="text"  placeholder="Search for a country..." 
          style={{background:props.eleColor.background}}
           onChange={(e)=>setSearchInput(e.target.value)} className={`${props.eleColor.bootColorText}  border-0 input `} id='search input' />
        </div>
           {/* {console.log(props.eleColor.background)} */}
        <div className='col-8 mt-3'></div>


                                      {/* filterDd */}
        <div className=' col dropdown  rounded shadow-lg ' style={props.eleColor} >
          <button className={`btn  ${props.eleColor.bootColorText} btn-default 
          dropdown-toggle w-100`} data-bs-toggle="dropdown" id='dropDownValue'
          >Filter by Region</button>
          <ul className='dropdown-menu w-100 ' style={props.eleColor}>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >Africa</a> </li>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >Americas</a> </li>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >Asia</a> </li>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >Europe</a> </li>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >Oceania</a> </li>
            <li ><a className={`${props.eleColor.bootColorText} dropdown-item`} onClick={(e)=>{clicked(e);setSearchInput("")}} href='#' >All</a> </li>
          </ul>        
        </div>
      </div>
    </div> 
    {/* {console.log(Cards)} */}
      <Cards search={searchInputPar} filter={filter.region}  index="" eleColor={props.eleColor}/>
    </>
  )
  }


  export default Query

