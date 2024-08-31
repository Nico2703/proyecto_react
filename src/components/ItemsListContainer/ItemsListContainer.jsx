import { Card } from "./components/Card/Card"
import { productos } from "../../pages/Detalle";

export const ItemsListContainer = () => {
    return <>
    <div className="itemsList">
        <Card 
            id = {productos[0].id}
            imagenURL = {productos[0].imagenURL}
            nombre = {productos[0].nombre}
            precio = {productos[0].precio}
        ></Card>
        <Card
            id = {productos[1].id}
            imagenURL = {productos[1].imagenURL}
            nombre = {productos[1].nombre}
            precio = {productos[1].precio}
        ></Card>
        <Card
            id = {productos[2].id}
            imagenURL = {productos[2].imagenURL}
            nombre = {productos[2].nombre}
            precio = {productos[2].precio}
        ></Card>
        <Card
            id = {productos[3].id}
            imagenURL = {productos[3].imagenURL}
            nombre = {productos[3].nombre}
            precio = {productos[3].precio}
        ></Card>
        <Card
            id = {productos[4].id}
            imagenURL = {productos[4].imagenURL}
            nombre = {productos[4].nombre}
            precio = {productos[4].precio}
        ></Card>
        <Card
            id = {productos[5].id}
            imagenURL = {productos[5].imagenURL}
            nombre = {productos[5].nombre}
            precio = {productos[5].precio}
        ></Card>
        <Card
            id = {productos[6].id}
            imagenURL = {productos[6].imagenURL}
            nombre = {productos[6].nombre}
            precio = {productos[6].precio}
        ></Card>
        <Card
            id = {productos[7].id}
            imagenURL = {productos[7].imagenURL}
            nombre = {productos[7].nombre}
            precio = {productos[7].precio}
        ></Card>
        <Card
            id = {productos[8].id}
            imagenURL = {productos[8].imagenURL}
            nombre = {productos[8].nombre}
            precio = {productos[8].precio}
        ></Card>
        <Card
            id = {productos[9].id}
            imagenURL = {productos[9].imagenURL}
            nombre = {productos[9].nombre}
            precio = {productos[9].precio}
        ></Card>
        <Card
            id = {productos[10].id}
            imagenURL = {productos[10].imagenURL}
            nombre = {productos[10].nombre}
            precio = {productos[10].precio}
        ></Card>
        <Card
            id = {productos[11].id}
            imagenURL = {productos[11].imagenURL}
            nombre = {productos[11].nombre}
            precio = {productos[11].precio}
        ></Card>
    </div>
    </>
};