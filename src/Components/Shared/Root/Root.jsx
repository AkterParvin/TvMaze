import { Outlet } from "react-router-dom";
import Nav from "../../Home/Nav";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-teal-100">
            <Nav/>
            <div className="max-w-6xl  mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;