import React from 'react'
import logo from '../images/logo.png'


const NavBar = ({Onsearch}) => {

const Search = (In) => {
  Onsearch(In)
}



  return (
    <div className='Navv'>
    <div className='logo'>
    <a href='/'>
    <img className='db-image' src={logo} alt="" />
    </a>
    </div>
    <div className='search'>
      <input onChange={(eo)=>Search(eo.target.value)} type="text" placeholder="بحث" />
      <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

export default NavBar
