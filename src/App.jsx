import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Carrito from "./pages/Carrito";
import Detalle from "./pages/Detalle";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="home" index element={<Home/>}/>  
                    <Route path="productos" element={<Productos/>}/>                 
                    <Route path="nosotros" element={<Nosotros/>}/>
                    <Route path="contacto" element={<Contacto/>}/>
                    <Route path="carrito" element={<Carrito/>}/>
                    <Route path="productos/detalle/:id" element={<Detalle/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );                  
};

export default App;  



