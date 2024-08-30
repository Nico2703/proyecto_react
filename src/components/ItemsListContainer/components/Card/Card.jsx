import { InfoProduct } from "../InfoProduct/InfoProduct";
import { ImageProduct } from "../ImageProduct/ImageProduct";

export const Card = ({imagenURL, nombre, detalle, precio}) =>{
    return <div className="card">
                    <ImageProduct imagenURL={imagenURL}/>
                <div className="card-body">
                    <InfoProduct nombre={nombre} precio={precio}/>
                </div>
            </div>
}