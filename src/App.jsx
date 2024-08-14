import "./App.css"
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App(){
    return (
        <>
            <NavBar/>
            <ItemsListContainer/>
            <Footer/>
        </>
    )                       
}

export default App;  



