import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Query from './Queries'

// var eleColor={background:"hsl(209, 23%, 22%)",
//                   color:"white"}
const Nav=()=>
{
    const [darkModeText,setDarkText]= useState("Dark Mode")
    const [eleColor,setEleColor]= useState({background:"hsl(209, 23%, 22%)"
                                            ,color:"white ",
                                            bootColorText:"text-white",
                                            imgStyle:{filter: "invert(100%)",width:"25px"},
                                            navBg:""
                                            })
    const [imgModeUrl,setImgModeUrl]= useState("../img/dark_mode.svg")
    
    
    const handleDarkMode=()=>{
      (darkModeText=="Dark Mode")?setDarkText("Light Mode"):setDarkText("Dark Mode")
      imgModeUrl=="../img/dark_mode.svg"? setImgModeUrl("https://static.thenounproject.com/png/2540391-200.png"):setImgModeUrl("../img/dark_mode.svg")
      eleColor.bootColorText=="text-white"? setEleColor({...eleColor,
                                                              background:"white",
                                                              bootColorText:"text-dark",
                                                              imgStyle:{filter: "invert(0%)",width:"25px"},
                                                              navBg:"bg-white"}):
                                            setEleColor({...eleColor,bootColorText:"text-white",
                                                              background:"hsl(209, 23%, 22%)",
                                                              imgStyle:{filter: "invert(100%)",width:"25px"},
                                                              navBg:""})
      // eleColor.navBg==""? setEleColor({...eleColor,navBg:"bg-white"}):setEleColor({...eleColor,navBg:""})
      // console.log(eleColor.bootColorText)
      document.body.style.backgroundColor=="rgb(32, 44, 55)"?document.body.style.backgroundColor="white":document.body.style.backgroundColor="rgb(32, 44, 55)"
      // console.log(document.querySelector(".card-title").classList.toggle("text-dark"))
      
    }
    
  return(
    <>
    <div className={`shadow-lg nav-bar container-fluid  p-sm-4 py-3 row m-0  ${eleColor.navBg} text-md-center`}
      style={eleColor} >
      
      <h3 className={` h5 d-flex align-content-end my-auto col ${eleColor.bootColorText} m-0 font-weight-bold`} >Where in the world?</h3>
      <div className='col d-flex justify-content-end
                       align-items-center'onClick={()=>handleDarkMode()} >
        <img src={imgModeUrl} 
         className='  mx-2 img-fluid ' 
         style={eleColor.imgStyle} alt="them mode" />
        <p className={`h5 ${eleColor.bootColorText}`}>{darkModeText}</p>
      </div>

    </div>
      <Query eleColor={eleColor}/>
    </>
  )
}
export default Nav