import { Link } from "react-router-dom";

export const InfoProduct = ({id, nombre, detalle, precio}) =>{
    return <>
        <div className="infoProduct">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{detalle}</p>
            <p className="card-text">${precio}</p>

            <Link to={`/productos/detalle/${id}`} className="btn">+ Info</Link>
        </div>
    </>
};