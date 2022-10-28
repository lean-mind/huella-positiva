# :sos: Frontend Huella positiva

## :up: Levantando el proyecto

Para que los formularios y las peticiones funcionen correctamente es necesario levantar el back-end. Este paso es opcional.

### :back: Ejecutando el Backend 

Para levantar el backend, son necesarias 3 dependencias globales: [Docker](https://www.docker.com/) (y [docker compose](https://docs.docker.com/compose/install/)), [Java](https://www.java.com/es/) y [Maven para java](https://maven.apache.org/). Con estas dependencias instaladas, se procede a clonar el [repositorio del backend](https://github.com/ayudadigital/huelladigital-backend). 
Lo siguiente será levantar el archivo `docker-compose.yml`, localizado en la ruta `{ruta-backend}/backend/docker/local/docker-compose.yml`. Se levanta con el comando 

```bash
docker-compose up -d
```

Con el soporte de los contenedores, es posible ejecutar el back-end. Para ello, se ejecuta la siguiente instrucción en el directorio `backend` del proyecto.

```bash
mvn clean compile spring-boot:run
```

Para que esto sea posible se debe haber configurado correctamente la variable de entorno `$path`. 

### :rocket: Levantando el front-end.

La única dependencia necesaria para ello es [NodeJS](https://nodejs.org/en/)

Simplemente se ha de ejecutar en este directorio dos instrucciones

```bash
npm install
npm run start
```

Con ello ya estaría disponible la vista en el navegador. :link: http://localhost:3000.

Existen otras utilidades disponibles para probar y desplegar el código:

#### `npm test`

Ejecuta los tests funcionales con Jest.

#### `npm test:e2e`

Ejecuta los tests end 2 end con Cypress. La configuración de estos tests se encuentra en el directorio `e2e`

#### `npm new:fc`

Crea un nuevo componente funcional en la ruta especificada. La configuración mínima de un `fc` consta de un fichero `.tsx`, el `index.ts` y otro `.scss`.

#### `npm run new:hook`

Crea un *hook* en el directorio `hooks` con el nombre especificado.

#### `npm run storybook`

Se lanza la utilidad `storybook` para testear los componentes React y sus vistas. [Más info](https://storybook.js.org/docs/react/get-started/introduction)

#### `npm run build`

Construye la aplicación para el entorno de producción en el directorio `build`. 

#### `npm run eject`

Si no se está conforme con la configuración de `build`, se puede ejecutar esta orden para eliminar una dependencia del proyecto.