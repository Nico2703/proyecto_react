import { ImageProduct } from "../ImageProduct/ImageProduct";
import { Link } from "react-router-dom";

export const CardDetalle = ({imagenURL, nombre, detalle, precio}) =>{
    const style = {width:'450px', height:'480px', marginTop: '30px'};
    const style_2 = {marginBottom: '120px'};
    return  <div class="card" style={style}>
                    <div class="card-body">
                        <ImageProduct imagenURL={imagenURL}/>
                        <h2> {nombre} </h2> 
                        <h3> {detalle} </h3>
                        <h4 style={style_2}> {precio} </h4>
                        <Link to="/home/carrito" class="btn"> Agregar a carrito </Link>
                    </div>
                </div>
            
}