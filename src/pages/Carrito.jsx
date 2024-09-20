import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Swal from 'sweetalert2'

function Carrito(){
    const {pedidos, pedidoQuitar, pedidosLimpiar, pedidoFinal} = useContext(cartContext);
    const navigate = useNavigate();

    const manejoSubmit = async (event) => {
        const esperaSwal = Swal.fire({
            title: 'Procesando...',
            text: 'Por favor, espera mientras procesamos tu pedido',
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        event.preventDefault(); 
        const email = event.target.elements.inputMail.value;
        const nombre = event.target.elements.inputNombre.value;
        await pedidoFinal(email, nombre);
        esperaSwal.close();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Pedido confirmado!",
            showConfirmButton: false,
            timer: 4000
        });
        navigate('/home', { replace: true });
    };

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
            {pedidos.length > 0 && (
                <>
                <h4 className='total'>A pagar:  ${total}</h4>
                <button id="botonFinal" className="btn" onClick={pedidosLimpiar}>Vaciar carrito</button>
                <form id="botonFinal" style={{marginTop: '20px'}} onSubmit={manejoSubmit}>
                    <label className="form-label"> Nombre </label>
                    <input type="nombre" className="form-control" id="inputNombre" required/>   
                    <label className="form-label"> Dirección e-mail </label>
                    <input type="email" className="form-control" id="inputMail" required/>
                    <button style={{marginTop: '10px'}} className="btn" type='submit'>Finalizar pedido</button>
                </form>
                </>
            )}
            {pedidos.length === 0 && (
                <>
                <h4 className='total'>Carrito vacío</h4>
                <Link to="/productos" id="botonFinal" className="btn">Ir a productos</Link>
                </>
            )}
        </div>
    )
}

export default Carrito;