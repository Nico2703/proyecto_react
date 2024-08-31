
function Contacto(){
    return(
        <main>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputMail" className="form-label"> Dirección e-mail </label>
                    <input type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text"> BaDum no compartirá la información contenida en este formulario </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTexto" className="form-label"> Mensaje </label>
                    <textarea className="form-control" id="inputTexto" rows="6"></textarea>
                </div>
                <button type="submit" className="btn"> Enviar </button>
            </form>
        </main>
    )
}

export default Contacto;