import { Attributes } from "react";

export interface apiCategories {

    id: number;
    attributes: {
        name: string;
        description: string;
        pic: {
            data: {
                attributes: {
                    url: string;
                }
            }


        }
    }
}

export interface apiProduct {

    id: number;
    attributes: {
        name: string;
        desc: string;
        energy_class: string | null,
        Availablity: string | null,
        Repairability_Index: string | null,
        ability: string | null,
        Nominal_power: number | null,
        Feed: string,
        Guarantee: string,
        weight: string,
        pic: {
            data: picData[]
        },
        dimension: {
            height: number;
            width: number;
        },
        categorie: {
            data: {
                attributes: {
                    name: string;

                }
            }
        }

    },
}

export interface picData {
    attributes: {

        url: string;

    }
}