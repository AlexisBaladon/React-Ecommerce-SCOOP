![SCOOP](./readme/readme-logo.png)


**Scoop** es un sitio web e-commerce de venta de helados donde podrás:


- Ver y filtrar un listado de helados por categoría
- Seleccionar un producto para verlo en más detalle
- Agregar productos al carrito
- Registrarte para realizar una compra
- Ver tu historial de compras


# Tech


Scoop usa algunas de las tecnologías más populares dentro de la programación web:


- [ReactJS] - Utilizado para el front end de la aplicación
- [Typescript] - Lenguaje de fuerte tipado para trabajar con React de forma más organizada y segura.
- [Firebase] - Base de datos no relacional y serverless proveída por Google.
- [CSS] - Utilizado para dar estilos a los componentes de la página.


![ReactJS_Image](./readme/React-icon.png)
![Typescript_Image](./readme/typescript-icon.png)
![Firebase_Image](./readme/firebase-icon.png)
![CSS_Image](./readme/css-icon.png)


# Features


Gracias al virtual DOM que maneja React, es posible renderizar una única vez la barra de navegación y el pie de página. El flujo de las vistas principales de la página pueden observarse en la siguiente imagen:


![FEATURES_1](./readme/pages.png)


**[1]** Muestra un listado de productos seleccionables, los cuales pueden ser filtrados utilizando URL Params


**[2]** Pueden verse los productos más detalládamente. Adicionalmente, el tipo de productos 'Recipiente' permite 
personalizar el producto como se muestra en la siguiente imagen:


![FEATURES_1](./readme/item-choser.gif)


**[3]** Se podrá agregar productos al carrito, los cuales pueden ser adquiridos solo al iniciar sesión y llenar un formulario. Estos además son guardados en el local storage del navegador.


**[4]** Al usuario se le permitirá ver un registro de sus órdenes de compra. Si este desea ver el "recibo" de su compra podrá descargarlo en formato pdf:


![FEATURES_1](./readme/pdf.png)


# Libraries


Dentro de React, son utilizadas las siguientes librerías:


- [[React-Bootrstrap]](https://react-bootstrap.github.io/) - Librería de React utilizada para facilitar componentes prediseñados.
- [[React-Router-Dom]](https://v5.reactrouter.com/web/api/Redirect) - Fundamental para la selección de vistas de la aplicación sin necesidad de recargar la página.
- [[Typescript]](https://www.typescriptlang.org/docs/handbook/react.html) - Utilizada para hacer posible el uso de typescript dentro del framework, además de servir como aprendizaje durante la realización del proyecto.
- [[Firebase]](https://firebaseopensource.com/projects/rakannimer/react-firebase/) - Utilizada para comunicar la base de datos con React. Además, facilita la implementación del sistema de autenticación.
- [[PDF-Lib]](https://pdf-lib.js.org/) - Utilizado para generar los recibos de compras. No es una librería indispensable, aunque se usa con el fin de darle un toque creativo a la página.
