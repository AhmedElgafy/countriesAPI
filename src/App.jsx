import ReactDOM from 'react-dom/client'
import React, { useState } from 'react';
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

const Query=()=>{
return(
  < >
  <div className='container my-5 mx-auto '>
    <div className="row row-cols-md-3 row-cols-sm-3 row-cols-1 ">
        {/* searchBar */}

      <div className="  col d-flex rounded" style={eleColor}>
        
        <img src="../public/search.svg " alt="" style={{filter: "invert(60%)"}}  className="col"/> 
        <input  type="text" placeholder='Search for a country...' className='  border-0 '
        />
      </div>
      <div className='col-8 mt-3'></div>
                                    {/* filterDd */}
      <div className=' col dropdown  rounded  ' style={eleColor} >
        <button className='btn  text-white btn-default 
        dropdown-toggle w-100' data-bs-toggle="dropdown" 
        >Filter by Region</button>
        <ul className='dropdown-menu w-100 ' style={eleColor}>
          <li><a className='dropdown-item' href='#' >Africa</a> </li>
          <li><a className='dropdown-item' href='#' >America</a> </li>
          <li><a className='dropdown-item' href='#' >Asia</a> </li>
          <li><a className='dropdown-item' href='#' >Europe</a> </li>
          <li><a className='dropdown-item' href='#' >Oceania</a> </li>
          <li><a className='dropdown-item' href='#' >All</a> </li>
        </ul>
        
        
      </div>
    </div>
  </div>
  </>
)
}
const url="../data.json"
const res=await fetch(url)
const data=await res.json()

const Sw=({index})=>{
  return (
   <>
     <div className='offcanvas offcanvas-start   bg-dark' style={{color:"white"}} tabIndex="-1" id='offcavas' aria-labelledby='offcavasLabel'>
       <div className='offcanvas-header'>
         <button type="button" className=" btn  text-white shadow btn-lg" style={eleColor} data-bs-dismiss="offcanvas" aria-label="Close">  &#8592; Back</button>
         <h2 className='offcanvas-title text-danger' id='offcanvasLabel'></h2>
     </div>
       <div className="offcanvas-body">
         <div>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, nostrum!
         </div>
       </div>
     </div>
   </>
  )  
 }
const List=()=>{
  const list=[]

const DisPlay=(e)=>{
  <Sw index="ahmed"></Sw>
  console.log(e.target.getAttribute("value"))
  return(
    <div className=' offcanvas  offcanvas-start' data-bs-backdrop="false" 
    tabIndex="-1" id="offcanvasScrolling" 
    aria-labelledby="offcanvasScrollingLabel">
      <div className="offcavas-header">hi</div>
    </div>
  )
}

  for(var x=data.length-4;x<data.length;x++){
    list.push(
      
      <div key={x} className='card  col p-0 shadow  ' style={eleColor} onClick={(e)=>DisPlay(e)} data-bs-toggle="offcanvas" data-bs-target="#offcavas" aria-controls="offcanvasExample">
              <img src={data[x].flags.png} className="card-img-top  "/>
              <a href="#" value={x} className='stretched-link' ></a>
              <div className='card-body '>
                <h5 className='card-title'style={{color:"hsl(0, 0%, 100%)"}} >{data[x].name}</h5>
                <ul className=' card-text p-0' style={{color:"hsl(0, 0%, 100%)",listStyle:"none"}}>
                  <li>Population:  <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}}>{data[x].population}</span></li>
                  <li>Region: <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}}>{data[x].region}</span></li>
                  <li>Capital: <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}}>{data[x].capital}</span></li>
                </ul>
              </div>
      </div>
    )
  }
  return (
    <div className='container  '>

      <div className=' row row-cols-lg-5 row-cols-md-3 row-cols-1 gap-5 justify-content-center mx-lg-auto mx-2 '>
         {list}
         <Sw/>
      </div>
</div>


  )
}

export { Nav,Query,List}