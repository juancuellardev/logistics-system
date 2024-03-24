# Sistema de Logística Básico con Cálculo de Tarifas (NestJS)

<p>
<img src="https://simpleicons.org/icons/nestjs.svg" width="30" height="30"> <img src="https://simpleicons.org/icons/postgresql.svg" width="30" height="30"> <img src="https://simpleicons.org/icons/docker.svg" width="30" height="30">
</p>


## Descripción

Este proyecto es una prueba técnica para el puesto de Desarrollador Middle, donde se requiere el desarrollo de un componente básico para un sistema de logística que pueda calcular tarifas de envío basadas en la distancia. Este componente está implementado como un microservicio en NestJS.

## Requisitos previos
- Node.js (instalado globalmente)
- Docker
- docker-compose

## Configuración inicial

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/juancuellardev/logistics-system.git
    ```
2. En la raíz del proyecto, instala las dependencias:

    ```bash
    cd tu_proyecto
    ```

3. Copia el archivo `.env.example` y renómbralo a `.env`:

    ```bash
    cp .env.example .env
    ```
4. Modifica el archivo .env con los valores adecuados para tu entorno.

## Uso sin Docker

1. En la raíz del proyecto, instala las dependencias:
    ```bash
    npm install
    ```


2. Ejecuta el siguiente comando para iniciar la aplicación:

    ```bash
    npm run start:dev
    ```
    Esto iniciará el servidor NestJS en modo de desarrollo.


2. Accede a la aplicación desde un navegador web:
    - Aplicación: [http://localhost:3000](http://localhost:3000)

## Uso con Docker

1. Asegúrate de tener Docker y docker-compose instalados en tu sistema.

2. Ejecuta el siguiente comando en la raíz del proyecto para construir y ejecutar los contenedores Docker:

    ```bash
    docker-compose up --build
    ```

    Este comando iniciará los servicios definidos en `docker-compose.yaml` (como la base de datos, la aplicación y pgAdmin) y los ejecutará en contenedores Docker.

3. Accede a la aplicación desde un navegador web:

    - Aplicación: [http://localhost:3000](http://localhost:3000)
    - pgAdmin: [http://localhost:5050](http://localhost:5050)

## Personalización

Si necesitas personalizar cualquier configuración, como puertos, variables de entorno u otras opciones de `docker-compose.yaml`, puedes hacerlo editando el archivo `docker-compose.yaml`.

## Detener el servidor

Para detener el servidor NestJS en ejecución (modo sin Docker), simplemente presiona `Ctrl + C` en la terminal donde se está ejecutando. 
Para detener los contenedores Docker (modo con Docker), utiliza el siguiente comando:

```bash
docker-compose down
```