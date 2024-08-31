import { InfoProduct } from "../InfoProduct/InfoProduct";
import { ImageProduct } from "../ImageProduct/ImageProduct";

export const Card = ({id, imagenURL, nombre, precio}) =>{
    return <div className="card">
                    <ImageProduct imagenURL={imagenURL}/>
                <div className="card-body">
                    <InfoProduct id={id} nombre={nombre} precio={precio}/>
                </div>
            </div>
}