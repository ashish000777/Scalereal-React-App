import './App.css';
import Headers from "./MyComponents/header";
import {Content} from "./MyComponents/Content";
import {Episort} from "./MyComponents/EpiSort";
import {YearSort} from "./MyComponents/YearSort";
import results from './movie.json';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [info, setInfo] = useState('No Movie Selected');
  const [heading, setHeading] = useState('');

  const onItemClick=(result)=>{
    console.log("Clicked on item",result)
    setInfo(result.opening_crawl);
    setHeading(result.title);
  }


  return (
    <>
    <Router>
          <Headers/>
          <Routes>
                <Route exact path="/" element={<Content results={results} onItemClick={onItemClick} heading={heading} info={info}/>}/>

                <Route path="/Episort" element={<Episort results={results} onItemClick={onItemClick} heading={heading} info={info}/>}/>

                <Route path="/YearSort" element={<YearSort results={results} onItemClick={onItemClick} heading={heading} info={info}/>}/>
          </Routes>
    </Router>
    </>
  );
}

export default App;
