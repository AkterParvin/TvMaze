import UseAxios from "../Hooks/useAxios";
import MoviesCard from "./MoviesCard";


const Movies = () => {
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    const movies = UseAxios(url);
    // console.log(movies);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-3 gap-5   mx-auto my-10 px-2 sha">

                {movies.map(item => <MoviesCard
                    key={item.show.id} item={item}></MoviesCard>)}
            </div>
        </div>
    );
};

export default Movies;