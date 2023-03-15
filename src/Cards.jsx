import ReactDOM from 'react-dom/client'
import React, { useState, useEffect ,createContext,useContext } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


var eleColor={background:"hsl(209, 23%, 22%)",
                  color:"white"}
//bring the data from file.

const url="../data.json"
const res=await fetch(url)
const data=await res.json()
const url2="../alph 3.json"
const res2=await fetch(url)
const data2=await res2.json()

const getByFilter=(cardInfo)=>
{
  // console.log(cardInfo.props.children[2].props.children[0].props.children=="Asia")

  if(cardInfo.props.children[2].props.children[0].props.children=="Asia")
  {
    return cardInfo
  }
}
//get code of country
const getCountryName=(code)=>{
  
  for(let x of data){
    if(code==x.alpha3Code){
      return x.name
    }
  }
}




const Offcavas=(props)=>{
  var borderCountries=[]
  const index=props.index
  
  if(data[index].borders){

    for(let i of data[index].borders){
      borderCountries.push(
        <div  key={getCountryName(i)} onClick={(e)=>getCountryName(i)}
        className=' text-center m-1  p-2 w-md-25 rounded shadow-lg ' style={eleColor}>{getCountryName(i)}</div>
        
      )
    }
  }else{
    borderCountries.push(
      <div key={0} className=' text-center m-1  p-2 w-md-25 rounded shadow' style={eleColor}>No Countries around</div>
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
                  <li  className='my-3'>Capital: {!data[index].capital ? "Have no capital":data[index].capital }</li>
                </ul>
                <ul className="col ps-2" style={{listStyle:"none",padding:0}}>
                  <li  className='my-3'>Top Level Domain: {data[index].topLevelDomain}</li>
                  <li  className='my-3'>Currencies: {!data[index].currencies ? "No Currencies":
                  data[index].currencies[0].name}</li>
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

















var getIndex=(e)=>{
  console.log(e)
}

const Cards=(props)=>{
  // console.log(props.eleColor)
  
   const [index,setIndex]=useState(0)
  // setIndex(index1)
  const [darkText,setDarkText]=useState()
  
  const list=[]
  // const [list,setList]=useState([])

  // useEffect(()=>{console.log("hi")},[props.eleColor])
    
    for(let x=0;x<data.length&&list.length!=data.length;x++){
      // console.log("iam in")
            list.push(
          <div key={x} countryname={data[x].name} onClick={(e)=>setIndex(x)}  countryregion={data[x].region}
            id="card" className='card  col p-0 shadow-lg clickableCard ' style={props.eleColor} 
            data-bs-toggle="offcanvas" data-bs-target="#offcavas" aria-controls="offcanvasExample">
                    <img src={data[x].flags.png} className="card-img-top  "/>
                    <a href="#" value={x} className='stretched-link'  ></a>
                    <div className='card-body '>
                      <h5 key={data[x].name+"1"} className={`card-title ${props.eleColor.bootColorText} `} >{data[x].name}</h5>
                      <ul className={`${props.eleColor.bootColorText} card-text  p-0`} style={{listStyle:"none"}}>
                        <li>Population:  <span style={{fontWeight:"100"}}>{data[x].population}</span></li>
                        <li>Region: <span style={{fontWeight:"100"}} >{data[x].region}</span></li>
                        <li>Capital: <span style={{fontWeight:"100"}}>{!data[x].capital ? "Have no capital":data[x].capital }</span></li>
                      </ul>
                    </div>
            </div>
            )
            console.log("iam here")
          }
  var newList=list



  
  const filter=props.filter
  const searchInput=props.search
  
  // console.log(!searchInput,!filter)
  if(!filter && !searchInput){
    
    // console.log(!newList)
  }
  if(filter && !searchInput){
     var newList=list.filter((element)=> element.props.children[2].props.children[1].props.children[1].props.children[1].props.children==filter)
  }
  if(filter && searchInput)
  {
    var newList=list.filter((element)=> {
      if(element.props.children[2].props.children[1].props.children[1].props.children[1].props.children==filter&&
        element.props.children[2].props.children[0].props.children.includes(searchInput.charAt(0).toUpperCase() + searchInput.slice(1)))
        return element
      
    }
    )
  }
  if(!filter && searchInput)
  {
    newList=list.filter((element)=> 
    {
      if(element.props.children[2].props.children[0].props.children.includes(searchInput.charAt(0).toUpperCase() + searchInput.slice(1)))
      {
        return element
      }
    })
  }



  
  return (
      <div className='container mb-5'>

        <div className=' row row-cols-lg-5 row-cols-md-3 
        row-cols-1 gap-5 justify-content-center mx-lg-auto
          mx-2 '>
            {/* {console.log(newList)} */}
          {newList}
          <Offcavas index={index}/>
        </div>
      </div>
    )
}




const DisPlay=(e)=>
  {
     index1=e.target.getAttribute("value")
    
  }

export default Cards