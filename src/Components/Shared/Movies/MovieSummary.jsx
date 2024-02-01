
import { Link, useParams } from "react-router-dom";
import UseAxios from "../Hooks/useAxios";
import BookTicket from "../BookTicket/BookTicket";


const MovieSummary = () => {
    const { id } = useParams();
    // console.log(id);

    const url2 = (`https://api.tvmaze.com/shows/${id}`);
    const data = UseAxios(url2);
    const { url, name, runtime, officialSite, summary, image
    } = data
    console.log(data);
    // useEffect(() => {

    // },[])
    return (
        <div>
            <section className="dark:bg-gray-800 max-w-6xl mx-auto dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">

                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">

                            {image && image.original && (
                                <img src={image.original}
                                    alt="poster"
                                    className="rounded-lg shadow-lg dark:bg-gray-500 aspect-square sm:h-full"
                                />
                            )}

                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-8 space-y-5 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <h1 className="text-3xl font-extrabold text-teal-600 font-serif">Movie Summary </h1>

                        <div className="flex space-x-2 sm:space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00796B" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>

                            <div className="space-y-2">

                                <div className="text-base font-medium leadi" dangerouslySetInnerHTML={{ __html: summary }} />
                                <div>
                                    <p className="font-semibold text-sm text-gray-700">Runtime:
                                        <span className="text-red-800 font-semibold"> {runtime} min</span>
                                    </p>
                                    <p className="font-semibold text-sm text-gray-700">Official Website:
                                        <span className="text-red-800 font-semibold"> {officialSite} min</span>
                                    </p>
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    <div >
                                        <button className="btn btn-accent btn-xs" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                            Book Ticket
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center text-teal-700 mb-2">Book Now!</h3>
                                                <BookTicket
                                                    data={data}
                                                ></BookTicket>
                                                <div className="modal-action">
                                                    <form method="dialog">

                                                        <button className="btn btn-xs btn-success">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                    <Link to="/">  <button className="btn btn-xs btn-error">Go Home</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00796B" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-base font-medium leadi">{}</p>

                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieSummary;