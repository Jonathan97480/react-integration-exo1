import React from "react";
import Api from "./conf";
import { apiCategories, apiProduct } from "../interface";
import { promises } from "stream";

/*recherche toutes les catégories dans l'api  */


export async function ApiGetAllCategories(): Promise<apiCategories[]> {
    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            url: Api.url + '/api/categories?populate=*',
        }

        fetch(option.url, option)
            .then(response => response.json())
            .then(data => {
                const categories: apiCategories[] = data.data;

                resolve(categories);

            }
            )

    })

}

/* recherche les produits qui on la méme id de catégories */

export async function ApiGetAllProductsByCategory(id: number): Promise<apiProduct[]> {

    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            url: Api.url + '/api/products?filters[categorie][id][$eq]=' + id + '&populate=*',
        }

        fetch(option.url, option)
            .then(response => response.json())
            .then(data => {
                const products: apiProduct[] = data.data;

                resolve(products);

            })
    })


}

export async function ApiGetProductById(id: number): Promise<apiProduct> {

    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            url: Api.url + '/api/products/' + id + '?populate=*',
        }

        fetch(option.url, option)
            .then(response => response.json())
            .then(data => {
                const products: apiProduct = data.data;

                resolve(products);

            })
    })

}



