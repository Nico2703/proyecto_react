import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

function Layout({cuenta}){
    return(
        <div>
            <NavBar cuenta={cuenta}/>
            <Outlet/>     
            <Footer/>                    
        </div>
    );
};

export default Layout;