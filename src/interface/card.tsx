export interface CardProps {
    Title: string;
    Poster: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface SearchResults {
    Search: CardProps[];
    totalResults: string;
    Response: string;
    pagination: number[];
    page: number;
    title: string;

} 
