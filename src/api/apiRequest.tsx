import React from "react";
import Api from "./conf";
import { SearchResults, DetailsProps } from "../interface";

/*recherche film ou série via le titre dans l'api  */

async function getMediaByTitle(title: string, page: number = 1) {

    const response = await fetch(`${Api.url}?apikey=${Api.key}&s=${title}&page=${page}`);

    const data = await response.json();
    const pagination = getPagination(parseInt(data.totalResults));
    const newData: SearchResults = data;

    newData.pagination = pagination;
    newData.page = page;
    newData.title = title;

    return newData;

}

async function getMediaByIdImB(id: string | undefined) {

    const response = await fetch(`${Api.url}?apikey=${Api.key}&i=${id}`);

    const data: DetailsProps = await response.json();

    return data;
}

export { getMediaByTitle, getMediaByIdImB };

function getPagination(totalResults: number) {

    const totalPage = Math.ceil(totalResults / 10);
    const pagination = [];

    for (let i = 1; i <= totalPage; i++) {
        pagination.push(i);
    }

    return pagination;

}


