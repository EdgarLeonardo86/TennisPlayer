JUGADORES ATP
Proyecto en el que se trabaja con una serie de tenistas, con los cuales puedes actualizar sus datos, borrar el tenista, añadir un nuevo tenista, y ver todos los tenistas disponibles.

Ejecutando las pruebas ⚙️
Comenzaremos con las pruebas, para creamos una base de datos en MySQL Workbench, que se llama db_tennis_player
Usuario: root
pass: sasota

Luego abrimos el proyecto Tenistas de VSC, y ejecutamos tanto el backend como el frontend:
- Backend: Para abrirlo, tenemos que ejecutar node index.js
- Frontend: Para abrirlo, ejecutamos ionic serve

Una vez hayamos hecho estos pasos, pasamos a Postman, y aquí podemos ejecutar los cuatro métodos (get, post, put y delete), con el objetivo de visualizar que funciona correctamente.
https://warped-station-532786.postman.co/workspace/02ba57e9-73ef-4ba8-b012-be65324e6752/collection/20395488-13b7ce49-07d0-4954-a00c-d0fc89c073e3?action=share&creator=20395488&ctx=documentation

PÁGINAS EN EL PROYECTO
Para este proyecto, he creado varias páginas:
- Home: Es la página principal, en la que está la ion-card de entrada a la app, en el que tenemos un menú de navegación, que irá o a home, o a la página AddPlayer, y también disponemos de un botón, que te llevará a tenista-list.
- AddPlayer: Esta es la página para crear un jugador. Para acceder a ella, se puede ir a través del menú, o a través de un botón en la página tenista-list.
- Tenista-list: Esta página te mostrará la relación de tenistas que hay en el circuito ATP, con los que podrás actualizar sus datos, borrar tenista, o a través de un botón, añadir un tenista nuevo.
- Updplayer: Esta página está creada para actualizar los datos de un jugador, para acceder a ella, hay que elegir el tenista, deslizar hacia la izquierda, y aparece tanto el botón de actualizar, como de borrar.

- COMPONENTES UTILIZADOS
- Ion-card
- Ion-list
- Ion-avatar
- Ion-menu
- Ion-toast
- Ion-refresher
- Ion-router
- Ion-sliding
- Ion-button
- Ion-icon

Construido con 🛠️
Aquí se ha utilizado como herramientas:
- Visual Studio Code
- Postman
- MySQL Workbench


Autores ✒️
- Edgar Quintana
- Tiburcio Cruz

