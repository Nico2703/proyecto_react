import { CardDetalle } from "../components/ItemsListContainer/components/Card/CardDetalle";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"; 

function Detalle(){
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [producto, setProducto] = useState([]);

    const cargaProducto = () => {
        setLoading(true);
    }

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((snapshot) => {
            setProducto({id: snapshot.id, ...snapshot.data()});
            cargaProducto();
        })
    }, [id])

    return <>
        {!loading && (
            <main>
                <img src="https://i.gifer.com/ZKZg.gif" alt="Cargando..." style={{ width: '100px', height: '100px'
                , marginTop: '180px'}}/>
            </main> 
        )}
        {loading && (
        <main>
            <CardDetalle 
                id= {producto.id}
                imagenURL = {producto.imagenURL}
                nombre= {producto.nombre}
                detalle= {producto.detalle}
                precio= {producto.precio}
            ></CardDetalle>
        </main>
        )}
    </>
};

export default Detalle;