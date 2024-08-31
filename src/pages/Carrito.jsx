import { Link } from "react-router-dom";

function Carrito({pedidos}){
    let total = 0;
    pedidos.forEach(pedido => {
        total += parseInt(pedido.precio.replace(/,/g, ''));
    });

    const style = {display: 'flex', flexDirection:'column', backgroundColor: '#FFEEAD', padding: '10px', 
        minHeight: '80vh', textAlign: 'center'};
    const style_2 = {display: 'flex', flexDirection:'row'}
    const style_3 = {listStyle: 'none', width: '35%', border: '3px solid #A02334', borderRadius: '10px', 
        padding: '5px', margin: '5px 5px', backgroundColor: 'white', textAlign: 'center', color: '#FFAD60'};

    return(
        
        <div style={style}>
            <h2> Check - Out </h2>
            <h4>Importe total de la compra: ${total}</h4>
            <div style={style_2}>
                {pedidos.map((pedido) => (
                        <li style={style_3}>
                                <img src={pedido.imagenURL} alt="" width="100" />
                                <h4>{pedido.nombre}</h4>
                                <p> {pedido.detalle} </p>
                                <p>Precio: ${pedido.precio}</p>
                        </li>
                    ))}
            </div>
            <Link to="https://www.mercadopago.com.ar/" id="botonFinal" className="btn" target='blank'>Finalizar compra</Link>
        </div>
    )
}

export default Carrito;