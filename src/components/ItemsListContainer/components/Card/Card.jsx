import { InfoProduct } from "../InfoProduct/InfoProduct";
import { ImageProduct } from "../ImageProduct/ImageProduct";

export const Card = ({id, imagenURL, nombre, precio, stock}) =>{
    return <>
            {stock > 0 && (
                <div className="card">
                        <ImageProduct imagenURL={imagenURL}/>
                    <div className="card-body">
                        <InfoProduct id={id} nombre={nombre} precio={precio}/>
                    </div>
                </div>
            )}
            {stock <= 0 && (
                <div className="card">
                        <ImageProduct imagenURL={imagenURL}/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <h2 style={{color:'#A02334'}}> No Disponible </h2>
                    </div>
                </div>
            )}
    </> 
}