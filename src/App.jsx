import ReactDOM from 'react-dom/client'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
const eleColor={background:"hsl(209, 23%, 22%)"}

const Nav=()=>
{
  return(
    <div className=' shadow-sm container-fluid  p-sm-4 py-3
                      row m-0   text-md-center'
      style={eleColor}>
      
      <h3 className=' h5 d-flex align-content-end my-auto col text-white m-0' >Where in the world?</h3>
      <div className='col d-flex justify-content-end
                       align-items-center' >
        <img src="../public/dark_mode.svg"
         className=' my-auto  mx-2 img-fluid ' 
         style={{filter: "invert(100%)",width:"10%"}} alt="" />
        <p className=' h5   text-white'>Dark mood</p>
      </div>

    </div>
  )
}
const Quire=()=>{
return(
  < >
  <div className=' mx-auto container row my-5 '>
    <div className="  col-sm-5 rounded d-flex align-content-center" style={eleColor}>
      <img src="../public/search.svg" alt="" style={{filter: "invert(100%)",width:"8%"}}  className=" mx-3"/> 
      <input style={{width:"50%"}} type="text" placeholder='Search for a country...' className='  border-0 '
       />
    </div>
    <div className='col-sm-4'></div>
    <div className=' dropdown col-sm-3 rounded  ' style={eleColor} >
      <button className='btn  text-white btn-default 
      dropdown-toggle' data-bs-toggle="dropdown" 
      >Filter by Region</button>
      <ul className='dropdown-menu ' style={eleColor}>
        <li><a className='dropdown-item' href='#' >Africa</a> </li>
        <li><a className='dropdown-item' href='#' >America</a> </li>
        <li><a className='dropdown-item' href='#' >Asia</a> </li>
        <li><a className='dropdown-item' href='#' >Europe</a> </li>
        <li><a className='dropdown-item' href='#' >Oceania</a> </li>
      </ul>
      
      
    </div>
  </div>
  </>
)
}
export { Nav,Quire}