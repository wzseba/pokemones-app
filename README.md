# pokemones-app
La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa pokeapi y a partir de ella poder, entre otras cosas:

Buscar pokemons
Filtrarlos / Ordenarlos
Crear nuevos pokemons
IMPORTANTE: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

Únicos Endpoints/Flags que pueden utilizar
GET https://pokeapi.co/api/v2/pokemon
GET https://pokeapi.co/api/v2/pokemon/{id}
GET https://pokeapi.co/api/v2/pokemon/{name}
GET https://pokeapi.co/api/v2/type

Requerimientos mínimos:
A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

IMPORTANTE: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

Tecnologías necesarias:
 React
 Redux
 Express
 Sequelize - Postgres
Frontend
Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

Pagina inicial: deben armar una landing page con

 Alguna imagen de fondo representativa al proyecto
 Botón para ingresar al home (Ruta principal)
Ruta principal: debe contener

 Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
 Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
Imagen
Nombre
Tipos (Electrico, Fuego, Agua, etc)
 Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
 Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
 Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina, mostrando los primeros 9 en la primer pagina.
IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto los pokemons traidos desde la API como así también las de la base de datos. Por otro lado, si revisan el endpoint que trae todos los pokemons verán que no muestra la información del pokemon sino una URL para hacer un subrequest y obtener los datos de allí. Tendrán que por cada pokemon que van a mostrar hacer otro request a esa URL para obtener su imagen y tipos. Debido a que esto puede hacer que la búsqueda sea muy lenta limitar el resultado total a 40 pokemons totales.

Ruta de detalle de Pokemon: debe contener

 Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
 Número de Pokemon (id)
 Estadísticas (vida, fuerza, defensa, velocidad)
 Altura y peso
Ruta de creación: debe contener

 Un formulario controlado con los campos mencionados en el detalle del pokemon
 Posibilidad de seleccionar/agregar más de un tipo de pokemon
 Botón/Opción para crear un nuevo pokemon
