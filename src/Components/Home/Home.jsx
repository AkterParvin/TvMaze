import Movies from "../Shared/Movies/Movies";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
           <Movies/> 
        </div>
    );
};

export default Home;