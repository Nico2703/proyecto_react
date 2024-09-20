import { Card } from "./components/Card/Card"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"; 

export const ItemsListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargaProductos();
    }, [])

    const cargaProductos = () => {
        setLoading(false);
        const db = getFirestore();
        const itemCollection = collection(db, "productos");
        getDocs(itemCollection)
        .then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoading(true);
        })
    }

    const productosPorCategoria = (categoria) => {
        setLoading(false);
        const db = getFirestore();
        const itemCollection = collection(db, "productos");
        const q = query(itemCollection, where('categoria', '==', categoria));
        getDocs(q)
        .then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoading(true);
        })
    };

    return <>
        {!loading && (
            <main>
                <img src="https://i.gifer.com/ZKZg.gif" alt="Cargando..." style={{ width: '100px', height: '100px'
                , marginTop: '180px'}}/>
            </main> 
        )}
        
        {loading && (
            <div style={{backgroundColor: '#FFEEAD', textAlign: 'center'}}>
                <li style={{listStyle: 'none', padding:'20px'}}>
                    <button className="btn" onClick={() => cargaProductos()}style={{margin: '0px 40px'}}>Todos</button> 
                    <button className="btn" onClick={() => productosPorCategoria('snare')}>Redoblantes</button> 
                    <button className="btn" onClick={() => productosPorCategoria('cymbal')}style={{margin: '0px 40px'}}>Platillos</button> 
                    <button className="btn" onClick={() => productosPorCategoria('drums')}>Baterías</button> 
                </li>
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
            </div>
        )}
    </>
};