import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from '../src/Components/Header/Header';
import Home from '../src/Pages/Home/Home';
import SlectedCard from '../src/Pages/Home/SlectedCard';
import Hightolow from './Price/Hightolow';

function App() {

  return (
    <>
    <div className='App'>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route exact index element={ <Home /> } />
          <Route exact path="movie/:id" element={<Hightolow /> } />
          <Route exact path="movies/:type" element={<h1>movie list page</h1> } />
          <Route exact path="/*" element={<h1>Error Page</h1> } />
          <Route exact path='/cartitem' element = {<SlectedCard/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
