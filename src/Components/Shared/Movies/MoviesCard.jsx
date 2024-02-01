/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const MoviesCard = ({ item }) => {
    const { score, show } = item;
    const { id, image, genres, language, name, premiered
    } = show;
    // console.log(show);
    return (
       
            <div className="card  bg-base-100 shadow-xl ">
            <figure className="px-5 pt-5">
                {image && image.original && (
                            <img src={image.original}
                        alt="poster"
                        className="rounded-xl h-72  w-full" 
                            />
                        )}
                  
                </figure>
                <div className="card-body items-start ">
                <h2 className="card-title text-teal-900 font-semibold">{name}</h2>
                <p className="text-sm font-medium">Genre: <span className="text-sm text-teal-800 font-semibold">{genres[0]}, {genres[1]}</span></p>
                <p className="text-sm font-medium">Language: <span className="text-sm text-teal-800 font-semibold">{language}</span></p>
                    <div className="card-actions">
                    <Link to={`/movieSummary/${id}`}><button className="btn btn-outline btn-xs">Show More</button></Link> 
                    </div>
                </div>
            </div>
      
        // <div className="flex flex-col max-w-5xl p-6 
        //     w-full space-y-5 overflow-hidden rounded-lg shadow-xl border dark:bg-gray-900 dark:text-gray-100 bg-teal-50">
        //     {/* <div className='flex  '>

        //         <div className="flex items-center space-x-4">


        //             <div className="flex flex-col space-y-1">
        //                 <a rel="noopener noreferrer" href="#" className="text-sm text-gray-700 font-semibold">Provider Name:
        //                     <span className="text-xs dark:text-gray-400 pl-2 text-sky-700">{}</span>
        //                 </a>

        //             </div>
        //         </div>
        //     </div> */}

        //     <div>
        //         {image && image.original && (
        //             <img src={image.original}
        //                 alt={`${name} Poster`}
        //             className="object-cover h-64 w-auto"
        //             />
        //         )}

        //         <h2 className="my-1 text-xl text-gray-800 font-semibold">{name}</h2>
        //         <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{}...</p>
        //     </div>
        //     <div className="flex items-center justify-between">
        //         <div >
        //             <Link to={`/servicedetail/${''}`}>  <button className="p-2 text-center text-gray-800 hover:text-sky-700 font-semibold">
        //                 View Details...
        //             </button></Link>

        //         </div>
        //         <div className="flex space-x-2 text-sm items-center p-1  dark:text-gray-400">

        //             <p className='font-bold text-gray-800'>Price:</p>
        //             <span className='text-sky-700 font-semibold'>{}</span>

        //         </div>
        //     </div>
        // </div>
    );
};

export default MoviesCard;