import { createContext, useState } from "react";

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
                actualizar[buscar].cantidad += 1;
                return actualizar;
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

    return (
        <cartContext.Provider value = {{cuenta, sumaCuenta, pedidos, pedidoAgregar, pedidoQuitar, pedidosLimpiar}}>
            {children}
        </cartContext.Provider>
    );
};

export default Intermediario;