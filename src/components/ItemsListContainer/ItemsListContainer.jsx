import { Card } from "./components/Card/Card"
import { productos } from "../../data.js";

export const ItemsListContainer = () => {
    return <>
    <div className="itemsList">
        {productos.map((producto)=>{
                        return (
                            <Card key={producto.id}
                            id = {producto.id}
                            imagenURL = {producto.imagenURL}
                            nombre = {producto.nombre}
                            precio = {producto.precio}
                            ></Card>
                        )
                    })}
    </div>
    </>
};