import { ImageProduct } from "../ImageProduct/ImageProduct";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../../context/cartContext";


export const CardDetalle = ({id, nombre, detalle, precio, imagenURL}) =>{
    const {sumaCuenta, pedidoAgregar} = useContext(cartContext);

    const manejoAgregar = () => {
        const producto = {
            id: id,
            nombre: nombre,
            detalle: detalle,
            precio: precio,
            imagenURL: imagenURL
        };
        sumaCuenta();
        pedidoAgregar(producto);
    };

    const style = {width:'450px', height:'480px', marginTop: '30px'};
    const style_2 = {color: '#FFAD60'};
    const style_3 = {margin: '30px 0px 40px 0px', color:'#A02334'};
    const style_4 = {marginRight: '20px'};
    return (
            <div className="card" style={style}>
                <div className="card-body">
                    <ImageProduct imagenURL={imagenURL}/>
                    <h2> {nombre} </h2> 
                    <h3 style={style_2}> {detalle} </h3>
                    <h4 style={style_3}> ${precio} </h4>
                    <Link to="/carrito" className="btn" style={style_4} onClick={()=> manejoAgregar()}> 
                        Agregar a carrito
                    </Link>
                    <Link to="/productos" className="btn"> Volver </Link>
                </div>
            </div>
    );
};
