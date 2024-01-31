import React from 'react'
import { Item } from "./Item";
import { useState } from 'react';

export const YearSort = (props) => {

    const [sortBy, setSortBy] = useState('episode_id');
  const [sortedResults, setSortedResults] = useState([...props.results.results]);

  const handleSortChange = (selectedSort) => {
    setSortBy(selectedSort);

    // Sort the results when a new option is selected
    const sorted = [...props.results.results].sort((a, b) => {
      if (selectedSort === 'episode_id') {
        return a.episode_id - b.episode_id;
      } else if (selectedSort === 'release_date') {
        // Assuming release_date is in the format 'YYYY-MM-DD'
        return new Date(a.release_date) - new Date(b.release_date);
      } else {
        // Default to sorting by episode_id if sortBy is not recognized
        return a.episode_id - b.episode_id;
      }
    });

    setSortedResults(sorted);
  };


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
                {sortedResults.map((result) => {
              return <Item result={result} key={result.episode_id} onItemClick={props.onItemClick} />;
            })}

            </div>

            <div className="right-column text-center my-5">
                <h2>{props.heading}</h2>
                <p>{props.info}</p>
            </div>

        </div>
    )
}

