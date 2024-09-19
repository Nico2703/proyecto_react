import Swal from "sweetalert2";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

function Contacto(){
    const navigate = useNavigate();

    const db = getFirestore();
    const mensajesCollection = collection(db, "mensajes");

    const mensajeSubmit = async (event) => {
        const esperaMensaje = Swal.fire({
            title: 'Enviando mensaje...',
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        event.preventDefault();
        const email = event.target.elements.inputMailM.value;
        const mensaje = event.target.elements.inputTextoM.value;
        const mensajeCompleto = {
            email: email,
            mensaje: mensaje,
            date: new Date()
        }
        await addDoc(mensajesCollection, mensajeCompleto);
        esperaMensaje.close();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensaje enviado! Pronto te contactaremos",
            showConfirmButton: false,
            timer: 4000
        });
        navigate('/home', { replace: true });
    };

    return(
        <main>
            <form onSubmit={mensajeSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputMail" className="form-label"> Dirección e-mail </label>
                    <input type="email" className="form-control" id="inputMailM" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text"> BaDum no compartirá la información contenida en este formulario </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTexto" className="form-label"> Mensaje </label>
                    <textarea className="form-control" id="inputTextoM" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn"> Enviar </button>
            </form>
        </main>
    )
}

export default Contacto;