import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../Store/Slise';

const Card = (props) => {
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        console.log(item,"itemmmm");
        dispatch(add_to_cart(item))
    }

  return (
    <>
    <div className='my-3'>
        <div className="card">
  <img src={props.image} className="card-img-top" width="100%" height="355px" alt="..." />
  <div className="card-body bg-light">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">Price - {props.price}</p>
    <a href={props.description} target='_blank' className="btn btn-sm btn-dark">Read More</a>
    <button className="btn bt-box" onClick={(element) => handleAdd(element)}>
        <span className="tx-white">Add T</span>
        <span className="tx-black">o Cart</span>  
    </button>
  </div>
 </div>
</div>
    </>
  )
}
 
export default Card
