import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardProps } from "../interface";



export default function Card(props: CardProps) {

    const { Title, Poster, Type, imdbID, Year } = props;
    const navigate = useNavigate();
    console.log("Poster: ", Poster)
    return (

        <Link to={`details/${imdbID}`} >
            <h3>{Title}</h3>
            <div>

                {
                    Poster === "N/A" ?
                        <img src="https://via.placeholder.com/300x450" alt="placeholder" /> :
                        <img src={Poster} alt={Title} width="300" />
                }
                <p>
                    {Type}

                </p>
                <p>
                    {Year}
                </p>

            </div>
        </Link>


    );
}