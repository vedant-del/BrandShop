import React, { useEffect, useState } from 'react'
import { add_to_cart } from '../Store/Slise'
import { useDispatch } from 'react-redux'

const Hightolow = () => {
    const[popularMovies, setPopularMovies] = useState([])
    const[price, setPrice] = useState()

    const componentDidMount = async () => {
        let url = "https://fakestoreapi.com/products";
          let data = await fetch(url)
          let parsedData = await data.json()
          setPopularMovies(parsedData)
        }

        useEffect(()=>{
            componentDidMount();
        },[])

        const dispatch = useDispatch();
        const handleAdd = ((item)=>{
            dispatch(add_to_cart(item))
        })

        const total = () => {
          let price = 0;
          popularMovies.map((el, k)=> {
            price = el.price + price;
          })
          setPrice(price);
        }
        
        useEffect(()=> {
          total();
        },[total])

  return (
    <>
       <div className='container my-3'>
        <h1 style={{textAlign: "center", margin: "35px 0px"}}> - Top Headlines</h1>

        <div className='row'>
        {popularMovies?.map((element)=> {
           return <div className='col-xl-3 col-lg-6  col-md-6 col-sm-12 col-12' key={element.id}>

      <div className='my-3'>
        <div className="card">
            <img src={element.image} className="card-img-top" width="100%" height="355px" alt="..." />
        <div className="card-body bg-light">
            <h5 className="card-title">{element.title?element.title.slice(0, 15):" "}</h5>
            <p className="card-text">{element.description?element.description.slice(0, 88):" "}</p>
            <p className="card-text">Price - {element.price}</p>
            <a href={element.title?element.title.slice(0, 15):" "} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          <button className="btn bt-box" onClick={() => handleAdd(element)}>
            <span className="tx-white">Add T</span>
            <span className="tx-black">o Cart</span>
          </button>
            </div>
              </div>
                </div>
                 </div>
                   })}
              </div>
      </div>
    </>
  )
}

export default Hightolow
