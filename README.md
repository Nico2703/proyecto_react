# Proyecto React

Proyecto creado para el curso 'React Js' - Coderhouse - Comisión #60025 

## Acerca

Este proyecto simula un e-commerce de venta de artículos de batería y percusión.
Creado como una aplicación 'React'.

### Front
Se ha utilizado CSS puro y Bootstrap.

### Links
Se obtuvieron las distintas imágenes de los productos desde:
https://www.drumsonline.com.ar/

Video desde:
https://www.youtube.com/embed/7ZQnJSkPD3s

### Back
Todos los productos, registro de mensajes y pedidos son obtenidos y almacenados con
Firebase y Firestore Database.
No se permiten compras de cantidades no disponibles. 
Productos sin stock, no pueden agregarse al carrito.

#### Detalle 

- ' Productos ' almacena la siguiente información:
    - ID
    - Nombre
    - Precio
    - Stock
    - ImagenURL
    - Detalle
    - Categoria

- ' Pedidos ' almacena la siguiente información:
    - Comprador
        - Email
        - Nombre
    - Pedidos
        - Producto
            - ID
            - Nombre
            - Precio
            - Stock
            - ImagenURL
            - Detalle
        - Cantidad

- ' Mensajes ' almacena la siguiente información:
    - ID
    - Fecha
    - Email
    - Mensaje