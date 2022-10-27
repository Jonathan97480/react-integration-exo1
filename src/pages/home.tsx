import React, { useState } from "react";
import { SearchResults } from "../interface";
import { Card } from "../components";
import { getMediaByTitle } from "../api/apiRequest";



export default function Home() {

    const [cards, setCards] = useState<SearchResults | undefined>(
        {
            "Search": [
                {
                    "Title": "The Avengers",
                    "Year": "2012",
                    "imdbID": "tt0848228",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                },
                {
                    "Title": "Avengers: Endgame",
                    "Year": "2019",
                    "imdbID": "tt4154796",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                },
                {
                    "Title": "Avengers: Infinity War",
                    "Year": "2018",
                    "imdbID": "tt4154756",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                },
                {
                    "Title": "Avengers: Age of Ultron",
                    "Year": "2015",
                    "imdbID": "tt2395427",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
                },
                {
                    "Title": "The Avengers",
                    "Year": "1998",
                    "imdbID": "tt0118661",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
                },
                {
                    "Title": "The Avengers: Earth's Mightiest Heroes",
                    "Year": "2010–2012",
                    "imdbID": "tt1626038",
                    "Type": "series",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
                },
                {
                    "Title": "Ultimate Avengers: The Movie",
                    "Year": "2006",
                    "imdbID": "tt0491703",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
                },
                {
                    "Title": "Ultimate Avengers II",
                    "Year": "2006",
                    "imdbID": "tt0803093",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
                },
                {
                    "Title": "The Avengers",
                    "Year": "1961–1969",
                    "imdbID": "tt0054518",
                    "Type": "series",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
                },
                {
                    "Title": "Avengers Assemble",
                    "Year": "2012–2019",
                    "imdbID": "tt2455546",
                    "Type": "series",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
                }
            ],
            "totalResults": "144",
            "Response": "True",
            "pagination": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            'page': 1,
            "title": "Avengers"

        }
    );
    const [pagination, setPagination] = useState<number[]>(
        cards?.pagination || []
    );

    const [inputSearch, setInputSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            <h2>Rechercher Votre film ou série</h2>
            <div>
                <input type="search" name="title-media" id="title-media"
                    onKeyDown={(e) => {
                        InputGetKey(e, setCards, inputSearch, setLoading, setPagination);
                    }}
                    onChange={(e) => {
                        setInputSearch(e.target.value);
                    }}
                />


                <button
                    onClick={() => {
                        setLoading(true);
                        setCards(undefined);
                        setPagination([]);
                        Search(inputSearch, setCards, 1, setLoading, setPagination, pagination);
                    }}
                >Search</button>
            </div>
            <section>

                {
                    typeof cards !== "undefined" ?
                        cards.Search.map((card, index) => {
                            return <Card key={index} {...card} />
                        }) : null
                }

            </section>
            <div>

                {

                    pagination.map((page, index) => {
                        return <button key={index}
                            onClick={() => {

                                if (page === cards?.page) { return; }
                                setLoading(true);
                                setCards(undefined);
                                Search(
                                    cards !== undefined ? cards.title : 'start', setCards, page, setLoading, setPagination, pagination);
                                document.body.scrollTop = 0;
                            }}
                            style={page === cards?.page ? { margin: '10px', color: 'red' } : { margin: '10px' }
                            }
                        >{page}</button>
                    })
                }
            </div>
        </div >
    );

}






function Search(title: string, _setCards: (cards: SearchResults) => void, page: number = 1, _setLoading: (loading: boolean) => void, _setPagination: (pagination: number[]) => void, _pagination: number[] | null = null) {

    getMediaByTitle(title, page).then((data) => {
        console.log(data);

        _setCards(data);
        if (_pagination?.length === 0) {
            _setPagination(data.pagination);
        }
        _setLoading(false);
    });

}

function InputGetKey(e: React.KeyboardEvent<HTMLInputElement>, _setCards: (cards: SearchResults | undefined) => void, inputSearch: string, _setLoading: (loading: boolean) => void, _setPagination: (pagination: number[]) => void) {
    if (e.key === "Enter") {
        _setLoading(true);
        _setCards(undefined);
        _setPagination([]);
        Search(inputSearch, _setCards, 1, _setLoading, _setPagination, []);
    }
}



