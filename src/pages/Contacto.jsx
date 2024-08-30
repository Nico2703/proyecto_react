
function Contacto(){
    return(
        <main>
            <form>
                <div className="mb-3">
                    <label for="inputMail" className="form-label"> Dirección e-mail </label>
                    <input type="email" class="form-control" id="inputMail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"> BaDum no compartirá la información en este formulario </div>
                </div>
                <div class="mb-3">
                    <label for="inputTexto" class="form-label"> Mensaje </label>
                    <textarea class="form-control" id="inputTexto" rows="6"></textarea>
                </div>
                <button type="submit" class="btn"> Enviar </button>
            </form>
        </main>
    )
}

export default Contacto;