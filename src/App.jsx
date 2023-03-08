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
const url2="../alph 3.json"
const res2=await fetch(url)
const data2=await res2.json()
const getCountryName=(code)=>{
  
  for(let x of data){
    // console.log(x)
    if(code==x.alpha3Code){
      return x.name
    }
  }
}


const Sw=(props)=>{
  const borderCountries=[]
  const index=props.index
  for(let i of data[index].borders){
    borderCountries.push(
      
      <div key={getCountryName(i)} className='col text-center m-1 flex-fill flex-grow-0 flex-shrink-0 rounded shadow' style={eleColor}>{getCountryName(i)}</div>
      
    )
  }
  console.log(borderCountries)
  //console.log("from Sw"+ props.index)
  return (
   <>
     <div className='offcanvas offcanvas-start   bg-dark' style={{color:"white"}} tabIndex="-1" id='offcavas' aria-labelledby='offcavasLabel'>
       <div className="offcanvas-body m-auto w-90">
          <button type="button" className=" btn my-5 text-white shadow btn-lg" style={eleColor} data-bs-dismiss="offcanvas" aria-label="Close">  &#8592; Back</button>
          <div className='row flex-grow-0 flex-shrink-0 row-cols-l-2 '>
            <div className='col w-25'>
              <img src={data[index].flags.svg} alt="" className='  ' />
            </div>
          <div className="col d-flex flex-column justify-content-between container my-5 ms-1 ms-lg-5">
              <h1 className='row  '>{data[index].name}</h1>
              <div className='row '> 
                <ul className="col" style={{listStyle:"none",padding:0}}>
                  <li  className='my-3'>Native Name: {data[index].nativeName}</li>
                  <li  className='my-3'>Population: {data[index].population}</li>
                  <li  className='my-3'>Sub Region: {data[index].subregion}</li>
                  <li  className='my-3'>Capital: {data[index].capital}</li>
                </ul>
                <ul className="col" style={{listStyle:"none",padding:0}}>
                  <li  className='my-3'>Top Level Domain: {data[index].topLevelDomain}</li>
                  <li  className='my-3'>Currencies: {data[index].currencies[0].name}</li>
                  <li  className='my-3'>Languages:  {data[index].languages[0].name}</li>
                </ul>
              </div>
              <div className='row row-cols-1 row-cols-lg-5 align-items-center '>
                <div className='col-4'>Border Countries: </div>
                  {borderCountries}
                
              </div>
            </div>
          </div>
       </div>
     </div>
   </>
  )  
 }
const List=()=>{
  const list=[]
  const [index,setIndex]=useState(0)
  const DisPlay=(e)=>
  {
    const index=e.target.getAttribute("value")
    //console.log(<Sw hi={index}></Sw>)

    console.log(index)
    setIndex(index)
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
          <Sw index={index}/>
        </div>
  </div>


    )
}

export { Nav,Query,List}