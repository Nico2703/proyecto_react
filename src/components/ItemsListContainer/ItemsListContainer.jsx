import { Card } from "./components/Card/Card"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

export const ItemsListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([])

    const cargaProductos = () => {
        setLoading(true);
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "productos");
        getDocs(itemCollection)
        .then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            cargaProductos();
        })
    }, [])

    return <>
        {!loading && (
            <main>
                <img src="https://i.gifer.com/ZKZg.gif" alt="Cargando..." style={{ width: '100px', height: '100px'
                , marginTop: '180px'}}/>
            </main> 
        )}
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