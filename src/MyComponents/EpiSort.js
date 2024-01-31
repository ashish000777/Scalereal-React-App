import React from 'react'
import { Item } from "./Item";
import { useState } from 'react';

export const Episort = (props) => {

    const [sortBy, setSortBy] = useState('episode_id');

    const sortedResults = [...props.results.results].sort((a, b) => {
        if (sortBy === 'episode_id') {
            return a.episode_id - b.episode_id;
        } else {
            // Default to sorting by episode_id if sortBy is not recognized
            return a.episode_id - b.episode_id;
        }
    });

    const handleSortChange = (selectedSort) => {
        setSortBy(selectedSort);
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

