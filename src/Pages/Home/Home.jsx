import React, { useEffect, useState } from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../Store/Slise';

const Home = () => {
  const[popularMovies, setPopularMovies] = useState([])

    const componentDidMount =async () => {
      let url = `https://fakestoreapi.com/products`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setPopularMovies(parsedData)
        console.log(popularMovies)
    }
    useEffect(()=>{
      componentDidMount();
    },[])

    const dispatch = useDispatch();

    const handleAdd = (item) => {
        console.log(item,"itemmmm");
        dispatch(add_to_cart(item))
    }

    const handlePrevClick =(()=>{

    })

    const handleNextClick =(()=>{

    })

  return (
    <>
    <div className='container my-3'>
        <h1 style={{textAlign: "center", margin: "35px 0px"}}> - Top Headlines</h1>

        <div className='row'>
        {popularMovies?.map((element)=> {
           return <div className=' col-xl-3 col-lg-6  col-md-6 col-sm-12 col-12' key={element.id}>

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
        <div className='container d-flex justify-content-between'>
        <button
        //  disabled={page<=1}
          type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button 
        // disabled={page + 1 > Math.ceil(totalResults/props.pageSize)}
         type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </>
  )
}

export default Home
