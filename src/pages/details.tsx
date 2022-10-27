import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMediaByIdImB } from "../api/apiRequest";
import { DetailsProps } from "../interface";

export default function Details() {

    const { id } = useParams();
    const [data, setData] = useState<DetailsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getMediaByIdImB(id).then((data) => {
            setData(data);
            setLoading(false);
        });
    }, [id]);


    return (
        <>
            {
                loading ?
                    <h1>Chargement...</h1> :
                    <div>
                        <h1>{data?.Title}</h1>
                        <div>
                            <img src={data?.Poster} alt={data?.Title} />
                            <p>{data?.Plot}</p>
                            <p>{data?.Year}</p>
                            <p>{data?.Genre}</p>
                            <p>{data?.Director}</p>
                            <p>{data?.Actors}</p>
                            <p>{data?.imdbRating}</p>
                        </div>
                    </div>

            }

        </>
    );
}