import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 container bg-sky-800">
    <Link to="/" className="text-lg md:text-xl font-extrabold"><img className="h-24 w-24 rounded-full border border-black" src="\src\images\Logo.png"></img></Link>
    {path==="/" && <div className="flex justify-center items-center bg-white p-2 rounded-full space-x-0">
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 text-white">
      {user? <h3><Link to="/write" >Write</Link></h3> :<h3><Link to="/login" >Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><img className="h-10 w-10 rounded-full" src="\src\images\Menu Icon.png"></img></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register" >Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative p-20"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>
  )
}

export default Navbar 