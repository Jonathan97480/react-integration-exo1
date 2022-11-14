import React from "react";
import { Link } from "react-router-dom";
import Api from "../api/conf";
import { apiProduct } from "../interface";

interface cardProps {
    name: string;
    desc: string;
    pic: string;
    id: number;
}


export default function Card(props: cardProps) {


    return (
        <div className='card'>
            <img src={Api.url + props.pic} alt="" />
            <h2>{props.name}</h2>


            <p>{props.desc} </p>
            <Link to={'/product/' + props.id} >En savoir plus</Link>
        </div>
    )

}