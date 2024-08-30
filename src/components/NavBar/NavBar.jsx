import { CartWidget } from "./components/CartWidget"
import { TiendaWidget } from "./components/TiendaWidget"
import { Link } from "react-router-dom";

export const NavBar = () =>{
    return <>
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <TiendaWidget/>
            <Link to="/home" className="navbar-brand mb-0 h1">
                    BaDum
                    <h5>Tienda online</h5>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li id="primerItem" className="nav-item">
                        <Link to="/home/productos" className="nav-link">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home/nosotros" className="nav-link">
                            Nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home/contacto" className="nav-link">
                            Contacto
                        </Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Link to="/home/carrito">
                       <CartWidget/>
                    </Link>
                </span>
                <p id="cartNumber">0</p>
            </div>
        </div>
    </nav>
    </>
}