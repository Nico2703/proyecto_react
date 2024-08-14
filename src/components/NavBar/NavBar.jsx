import { CartWidget } from "./components/CartWidget"
import { TiendaWidget } from "./components/TiendaWidget"

export const NavBar = () =>{
    return <>
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <TiendaWidget/>
            <a className="navbar-brand mb-0 h1" href=""> BaDum
                <h5>Tienda online</h5>
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li id="primerItem" className="nav-item">
                <a className="nav-link" href="">Productos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="">Nosotros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="">Contacto</a>
                </li>
            </ul>
            <span className="navbar-text">
                <a href=""><CartWidget/></a>
            </span>
            <p id="cartNumber">0</p>
            </div>
        </div>
    </nav>
    </>
}