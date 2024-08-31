import { CardDetalle } from "../components/ItemsListContainer/components/Card/CardDetalle";
import { useParams } from "react-router-dom";

export const productos = [
    { id: 1, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA5dc776f91bb76.jpg", nombre: 'Sonor Aq2 / 14x6" - White Pearl', 
        detalle: 'Maple / Herrajes chrome plated  10 torres / Aros Superhoop 2.3', precio: '493,200' },
    { id: 2, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA5a3ba007a90f1.jpg", nombre: 'Tama SLP / 14x6" - Bubinga', 
        detalle: '12 capas de 10 mm / Aros Steel Mighty Hoop de 10 orificios y 2,3 mm con orejetas Starclassic', precio: '994,120' },
    { id: 3, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA621c133bf0bfc.jpg", nombre: 'Pearl Stavecraft / 14x5"', 
        detalle: 'Roble Tailandés de 25 mm / Aros Die-cast / Color Acabado Natural', precio: '1,744,440' },
    { id: 4, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA64bc2a0a4aeb5.jpeg", nombre: 'Dw Collectors / 14x6.5"', 
        detalle: 'Brass Shell de 1mm / Aros de 3.0mm True Hoops Triple-flanged / 10 torres', precio: '1,891,176' },
    { id: 5, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA59010d355751f.jpg", nombre: 'Gretsch Renown / 14x6.5"', 
        detalle: 'Maple 7 capas / Aros 302 Gretsch / Silver Oyster Pearl / 10 torres', precio: '1,095,018' },
    { id: 6, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA56015f2c002b4.jpg", nombre: 'Tama Sound Lab Project / 14x6.5"', 
        detalle: 'Maple 6 capas de 5mm / 8 Torres Brass Tube', precio: '905,350' },
    { id: 7, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA61fc3c78bc8de.jpg", nombre: 'Meinl Byzance / Ride 20"', 
        detalle: 'Foundry Reserve/ Aleación B20 / Martillado a mano en Turquía para un sonido único', precio: '1,164,226' },
    { id: 8, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA563251de45382.jpg", nombre: 'Zildjian K / Ride 20"', 
        detalle: 'Aleación B20 / Medium / Patrón de martillado tradicional aleatorio', precio: '914,722' },
    { id: 9, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA5ad4fc6f0bafb.jpg", nombre: 'Zildjian K / Sweet Crash 18"', 
        detalle: 'Aleación B20 / Extra Thin / Dark / Martillado tradicional y campana sin tornear', precio: '852,846' },
    { id: 10, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA5627eefb0bbb4.jpg", nombre: 'Sabian HHX / Hi-Hat 14"', 
        detalle: 'Aleación B20 / Brillante / Sonido oscuro, explosivo-cortante / Timbre medio a bajo', precio: '1,058,867' },
    { id: 11, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA61fde35a3a643.jpg", nombre: 'Sonor Vintage Series / 3 Cascos', 
        detalle: 'Beech 9 capas de 6mm / BD 20x14" - TN 12x8" - FT 14x12"', precio: '7,005,630' },
    { id: 12, imagenURL:"https://www.drumsonline.com.ar/contenido/thumbs/PRODUCTOGALERIA65f3273a2d195.jpg" , nombre: 'Tama Starclassic / Red Oyster Wrap', 
        detalle: ' Birch Walnut / Red Oyster Wrap / 22x16 10x8 12x9 16x14 ', precio: '4,273,204' },
];

function Detalle({sumaCuenta, pedidoAgregar}){
    const { id } = useParams();
    const producto = productos.find(p => p.id === parseInt(id));
    
    if (!producto) {
        return <h2> Producto no encontrado </h2>;
    }

    return (
        <main>
            <CardDetalle 
                imagenURL = {producto.imagenURL}
                nombre= {producto.nombre}
                detalle= {producto.detalle}
                precio= {producto.precio}
                sumaCuenta = {sumaCuenta}
                pedidoAgregar= {pedidoAgregar}
            ></CardDetalle>
        </main>
    );
};

export default Detalle;