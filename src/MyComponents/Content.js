import React from 'react'
import {Item} from "./Item";

export const Content = (props) => {
  return (
    <div className="container-fluid">
    <div className="left-column">
        <table className="table text-white mb-0 fixed-width-columns">
        <thead>
            <tr>
              <th scope="col">Epidsode Id</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Explore</th>
            </tr>
        </thead>
        </table>
        {props.results.results.map((result)=>{
          return <Item result={result} key={result.episode_id} onItemClick={props.onItemClick}/> 
        })}
        
    </div>

    <div className="right-column text-center my-5">
        <h2>{props.heading}</h2>
        <p>{props.info}</p>
    </div>

  </div>
  )
}

