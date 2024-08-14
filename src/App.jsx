import "./App.css"
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App(){
    return (
        <>
            <NavBar/>
            <ItemsListContainer infoHome = "Página en construcción." infoHome_2= "Próximamente encontrarás los mejores artículos del mundo baterístico."/>
            <Footer/>
        </>
    )                       
}

export default App;  



