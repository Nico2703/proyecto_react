import { CardDetalle } from "../components/ItemsListContainer/components/Card/CardDetalle";
import { useParams } from "react-router-dom";
import { productos } from "../../src/data.js";


function Detalle(){
    const { id } = useParams();
    const producto = productos.find(p => p.id === parseInt(id));
    
    if (!producto) {
        return <h2> Producto no encontrado </h2>;
    }

    return (
        <main>
            <CardDetalle 
                id= {producto.id}
                imagenURL = {producto.imagenURL}
                nombre= {producto.nombre}
                detalle= {producto.detalle}
                precio= {producto.precio}
            ></CardDetalle>
        </main>
    );
};

export default Detalle;