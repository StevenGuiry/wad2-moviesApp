import React, { useEffect, useState } from "react";
import { getCredits } from "../../api/tmdb-api";
import Thumbnail from 'react-thumbnail';

export const URL_IMG = 'https://image.tmdb.org/t/p/';
export const IMG_SIZE_SMALL = 'w150/';
export const CAST_MAX_NUM = 5;

export default ({ movie }) => {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        getCredits(movie.id).then(credits => {
            setCredits(credits);
        });
    }, [movie.id]);
    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Character played</th>
                </tr>
            </thead>
            <tbody>
                {credits.map(c => {
                    return (
                        <tr key={c.id}>
                            <Thumbnail src={URL_IMG + IMG_SIZE_SMALL + c.profile_path} alt={c.name}>
                                <p>{c.name}</p>
                            </Thumbnail>
                            <td>{c.name}</td>
                            <td>{c.character}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};