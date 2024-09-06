import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function Carrito(){
    const {pedidos, pedidoQuitar, pedidosLimpiar} = useContext(cartContext);

    let total = 0;
    pedidos.forEach(pedido => {
        total += parseInt(pedido.precio.replace(/,/g, '') * pedido.cantidad);
    });

    const style = {display: 'flex', flexDirection:'column', backgroundColor: '#FFEEAD', padding: '10px', 
        minHeight: '80vh', textAlign: 'center'};
    const style_2 = {display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', margin:'30px 70px'};
    const style_3 = {listStyle: 'none', width: '90%', border: '3px solid #A02334', borderRadius: '10px', 
        padding: '5px', margin: '5px 5px', backgroundColor: 'white', textAlign: 'center', color: '#FFAD60'};

    return(
        <div style={style}>
            <h2 className='total'> Check - Out </h2>
            <div style={style_2}>
                {pedidos.map((pedido) => (
                        <li style={style_3} key={pedido.id}>
                                <img src={pedido.imagenURL} alt="" width="100" />
                                <h4>{pedido.nombre}</h4>
                                <p> {pedido.detalle} </p>
                                <p>Precio: ${pedido.precio}</p>
                                <p>Cantidad: {pedido.cantidad} </p>
                                <button className="botonQuitar" onClick={() => pedidoQuitar(pedido.id)}> Quitar elemento </button>
                        </li>
                    ))}
            </div>
            <h4 className='total'>A pagar:  ${total}</h4>
            <button id="botonFinal" className="btn" onClick={pedidosLimpiar}>Vaciar carrito</button>
            <Link to="https://www.mercadopago.com.ar/" id="botonFinal" className="btn" target='blank'>Finalizar compra</Link>
        </div>
    )
}

export default Carrito;