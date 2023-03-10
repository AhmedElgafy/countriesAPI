import ReactDOM from 'react-dom/client'
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


const eleColor={background:"hsl(209, 23%, 22%)",
                  color:"white"}

const Nav=()=>
{
  return(
    <div className=' shadow-lg nav-bar container-fluid  p-sm-4 py-3
                      row m-0   text-md-center'
      style={eleColor} onClick={(e)=>darkMood()}>
      
      <h3 className=' h5 d-flex align-content-end my-auto col text-white m-0 font-weight-bold' >Where in the world?</h3>
      <div className='col d-flex justify-content-end
                       align-items-center' >
        <img src="../public/dark_mode.svg"
         className=' my-auto  mx-2 img-fluid ' 
         style={{filter: "invert(100%)",width:"5%"}} alt="" />
        <p className=' h5 text-white'>Dark Mode</p>
      </div>

    </div>
  )
}

const Query=()=>{
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
  //console.log(filter.region)
return(
  < >
  <div className='container my-5 mx-auto queries' >
    <div className="row row-cols-md-3 row-cols-sm-3 row-cols-1 ">
        {/* searchBar */}

      <div className="  col d-flex rounded" style={eleColor}>
        
        <img src="../public/search.svg " alt="" style={{filter: "invert(60%)"}}  className="col"/> 
        <input style={{color:"wheat"}} type="text" placeholder='Search for a country...'
         onChange={(e)=>setSearchInput(e.target.value)} className='  border-0 ' id='search input' />
      </div>
      <div className='col-8 mt-3'></div>
                                    {/* filterDd */}


      <div className=' col dropdown  rounded  ' style={eleColor} >
        <button className='btn  text-white btn-default 
        dropdown-toggle w-100' data-bs-toggle="dropdown" id='dropDownValue'
        >Filter by Region</button>
        <ul className='dropdown-menu w-100 ' style={eleColor}>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >Africa</a> </li>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >Americas</a> </li>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >Asia</a> </li>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >Europe</a> </li>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >Oceania</a> </li>
          <li><a className='dropdown-item' onClick={(e)=>clicked(e)} href='#' >All</a> </li>
        </ul>        
      </div>
    </div>
  </div>
  <List filter={filter.region} search={searchInputPar}/>
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


const Offcavas=(props)=>{
  const borderCountries=[]
  const index=props.index
  if(data[index].borders){

    for(let i of data[index].borders){
      borderCountries.push(
        <div key={getCountryName(i)} onClick={(e)=>console.log(getCountryName(i))}
        className=' text-center m-1  p-2 w-md-25 rounded shadow-lg ' style={eleColor}>{getCountryName(i)}</div>
        
      )
    }
  }else{
    borderCountries.push(
      <div  className=' text-center m-1  p-2 w-md-25 rounded shadow' style={eleColor}>No Countries around</div>
    )

  }
  //console.log(borderCountries)
  //console.log("from Sw"+ props.index)
  return (
   <>
     <div className='offcanvas offcanvas-start   bg-dark' style={{color:"white"}} tabIndex="-1" id='offcavas' aria-labelledby='offcavasLabel'>
       <div className="offcanvas-body m-auto w-90">
          <button type="button" className="btn my-5 text-white shadow-lg btn-lg" style={eleColor} data-bs-dismiss="offcanvas" aria-label="Close">  &#8592; Back</button>
          <div className='row flex-grow-0 flex-shrink-0 row-cols-m-2 '>          
              <img src={data[index].flags.svg} alt="" className='    col-lg-6 col-12  ' style={{objectFit:"contain"}}/>
          <div className="col d-flex flex-column justify-content-between container my-5 ms-1 ms-lg-5">
              <h1 className='row  '>{data[index].name}</h1>
              <div className='row row-cols-md-2 row-cols-1  '> 
                <ul className="col " style={{listStyle:"none",padding:0}}>
                  <li  className='my-3'>Native Name: {data[index].nativeName}</li>
                  <li  className='my-3'>Population: {data[index].population}</li>
                  <li  className='my-3'>Sub Region: {data[index].subregion}</li>
                  <li  className='my-3'>Capital: {data[index].capital}</li>
                </ul>
                <ul className="col ps-2" style={{listStyle:"none",padding:0}}>
                  <li  className='my-3'>Top Level Domain: {data[index].topLevelDomain}</li>
                  <li  className='my-3'>Currencies: {data[index].currencies[0].name}</li>
                  <li  className='my-3'>Languages:  {data[index].languages[0].name}</li>
                </ul>
              </div>
              <div className='row  row-cols-lg-5 align-items-center '>
                <div className='col-4  p-0 justify-content-left'
                >Border Countries: </div>
            
                  {borderCountries}
                
              </div>
            </div>
          </div>
       </div>
     </div>
   </>
  )  
 }
const List=(props)=>{
  const list=[]
  const [index,setIndex]=useState(0)
  const filter=props.filter
  const searchInput=props.search
  // console.log("filter is: ", filter)
  // console.log("search is: ",searchInput)

  const DisPlay=(e)=>
  {
    const index=e.target.getAttribute("value")
    //console.log(<Sw hi={index}></Sw>)

    //console.log(index)
    setIndex(index)
  }

  for(var x=0;x<data.length;x++){
    //console.log("in for loop")
    if(!searchInput && !filter){
      list.push(
        <div key={x} id="card" className='card  col p-0 shadow-lg  ' style={eleColor} onClick={(e)=>DisPlay(e)}
         data-bs-toggle="offcanvas" data-bs-target="#offcavas" aria-controls="offcanvasExample">
                <img src={data[x].flags.png} className="card-img-top  "/>
                <a href="#" value={x} className='stretched-link' ></a>
                <div className='card-body '>
                  <h5 className='card-title'style={{color:"hsl(0, 0%, 100%)"}} >{data[x].name}</h5>
                  <ul className=' card-text p-0' style={{color:"hsl(0, 0%, 100%)",listStyle:"none"}}>
                    <li>Population:  <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}}>{data[x].population}</span></li>
                    <li>Region: <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}} >{data[x].region}</span></li>
                    <li>Capital: <span style={{color:"hsl(0, 0%, 88%) !important",fontWeight:"100"}}>{data[x].capital}</span></li>
                  </ul>
                </div>
        </div>
      )
    }else{
      //console.log(data[x].name.toLowerCase().includes(searchInput.toLowerCase())||data[x].region==filter)
        //
        if((data[x].name.toLowerCase().includes(searchInput.toLowerCase())&&data[x].region==filter)||
        data[x].name.toLowerCase().includes(searchInput.toLowerCase())&&!filter){
          list.push(
            <div key={x} className='card  col p-0 shadow-lg  ' style={eleColor} onClick={(e)=>DisPlay(e)}
             data-bs-toggle="offcanvas" data-bs-target="#offcavas" aria-controls="offcanvasExample">
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
    }
  }
    return (
      <div className='container  '>

        <div className=' row row-cols-lg-5 row-cols-md-3 
        row-cols-1 gap-5 justify-content-center mx-lg-auto
          mx-2 '>
          {list}
          <Offcavas index={index}/>
        </div>
  </div>


    )
}
const darkMood=()=>{
  document.body.classList.toggle("bg-white")
  document.querySelector(".row").classList.toggle("bg-white")
  // document.querySelectorAll(".card").toggle("darkMood")
  const allElemnts=document.querySelectorAll(".card")
  document.querySelector(".nav-bar").children[0].classList.toggle("text-white")
  document.querySelector(".nav-bar").children[0].classList.toggle("text-dark")
  document.querySelector(".nav-bar").children[1].children[1].classList.toggle("text-white")
  document.querySelector(".nav-bar").children[1].children[1].classList.toggle("text-dark")
  console.log(document.querySelector(".nav-bar").children[1].children[1].textContent)
  const sunImgUrl="https://toppng.com/uploads/preview/sun-icon-free-download-png-and-vector-sun-icon-11562902365ry8jqdxl5e.png"
  const moonImgUrl="../public/dark_mode.svg"
  const sunAndMoon=document.querySelector(".nav-bar").children[1].children[0]
  if (sunAndMoon.src!=sunImgUrl){
    sunAndMoon.src=sunImgUrl
    sunAndMoon.style.filter="invert(0%)"
    document.querySelector(".nav-bar").children[1].children[1].textContent="Light Mode"
  }else{
    sunAndMoon.src=moonImgUrl
    sunAndMoon.style.filter="invert(100%)"
    document.querySelector(".nav-bar").children[1].children[1].textContent="Dark Mode"

  }
  
  allElemnts.forEach(element => {
    element.classList.toggle("bg-white")
    element.children[2].children[1].classList.toggle("text-dark")    
    element.children[2].children[0].classList.toggle("text-dark")    
  });
  // document.querySelector(".card-body").classList.toggle("text-dark")
}
console.log(document.body.onchange)
export { Nav,Query}