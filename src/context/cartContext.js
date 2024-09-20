import { createContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import Swal from 'sweetalert2'

export const cartContext = createContext();

function Intermediario({children}){
    const [cuenta, setCuenta] = useState(0);

    const sumaCuenta = () => {
        setCuenta(cuenta + 1);
    };

    const [pedidos, setPedidos] = useState([]);
    
    const pedidoAgregar = (producto) => {
        setPedidos((pedidos) => {
            const buscar = pedidos.findIndex(p => p.id === producto.id);
            if (buscar !== -1) { 
                const actualizar = [...pedidos];
                if (producto.stock > actualizar[buscar].cantidad){
                    actualizar[buscar].cantidad += 1;
                    return actualizar;  
                } else{
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Sin stock disponible",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setCuenta(cuenta);
                    return actualizar;
                }  
            }
            return [...pedidos, { ...producto, cantidad: 1 }];
        });
    };

    const pedidoQuitar = (id) => {
        setPedidos((pedidos) => {
            const busca = pedidos.findIndex(p => p.id === id);
            if (busca !== -1) {
                const actualizar = [...pedidos];
                if (actualizar[busca].cantidad > 1) {
                    actualizar[busca].cantidad -= 1;
                    setCuenta(cuenta => cuenta - 1);
                    return actualizar;
                } else {
                    setCuenta(cuenta => cuenta - 1);
                    return actualizar.filter(p => p.id !== id);
                }
            }
            return pedidos;
        });
    };

    const pedidosLimpiar = () => {
        setPedidos([]);
        setCuenta(0);
    };

    const db = getFirestore();
    const pedidosCollection = collection(db, "pedidos");
    const pedidoFinal = async (nombre, email) => {
        const pedidoCompleto = {
            pedidos: pedidos,
            date: new Date(),
            comprador: {nombre, email}
        }
        await addDoc(pedidosCollection, pedidoCompleto);
        pedidosLimpiar();
    }

    return (
        <cartContext.Provider value = {{cuenta, sumaCuenta, pedidos, pedidoAgregar, pedidoQuitar, pedidosLimpiar, pedidoFinal}}>
            {children}
        </cartContext.Provider>
    );
};

export default Intermediario;