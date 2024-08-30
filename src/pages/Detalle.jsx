import { CardDetalle } from "../components/ItemsListContainer/components/Card/CardDetalle";


function Detalle(){
    return (
        <main>
            <CardDetalle
                imagenURL = 'https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA5dc776f91bb76.jpg'
                nombre='Producto 1'
                detalle='Detalle producto 1' 
                precio='$...'
            ></CardDetalle>
        </main>
    )
}

export default Detalle;