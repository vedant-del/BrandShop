import React from 'react'
import "./Header.css"
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const neviget = useNavigate()

  const counttr = useSelector((state) => state.cart)

  const addToCart = ()=>{
      neviget("/cartitem")
  }
  
  return (
    <>
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><span className='header__icon'>vedant</span></Link>
            <Link to="/movie/:id" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
        <div className="shop-img">
        <button
            color="secondary"
            id="basic-button"
            style={{width:"50px"}}
            onClick={addToCart}
            >{counttr.length}
        </button>
        </div>
    </div> 
    </>
  )
}
export default Header
