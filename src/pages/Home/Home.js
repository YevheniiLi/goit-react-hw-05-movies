import { Link } from "react-router-dom"

export const Home = ({trendingFilms}) => {
    return (
        <div>
            <h1>Popular films</h1>
            <ul>
                {trendingFilms.map(({name, id}) =>
                <li key={id}><Link to={`movies/${id}`}>{name}</Link></li>
                )}
            </ul>
        </div>
    )
}