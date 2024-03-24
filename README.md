# Sistema de Logística Básico con Cálculo de Tarifas (NestJS)

## Descripción

Este proyecto es una prueba técnica para el puesto de Desarrollador Middle, donde se requiere el desarrollo de un componente básico para un sistema de logística que pueda calcular tarifas de envío basadas en la distancia. Este componente está implementado como un microservicio en NestJS.

## Requisitos previos
- Node.js (instalado globalmente)
- Docker
- docker-compose

## Tecnologías Utilizadas

<ul>
  <li>
    <div style="display: flex; align-items: center;">
      <img src="https://simpleicons.org/icons/nestjs.svg" style="margin-right: 10px" width="30" height="30">
      <strong>NestJS</strong>
    </div>
  </li>
  <li>
    <div style="display: flex; align-items: center;">
      <img src="https://simpleicons.org/icons/postgresql.svg" style="margin-right: 10px" width="30" height="30"> 
      <strong>PostgreSQL</strong>
    </div>
  </li>
  <li>
    <div style="display: flex; align-items: center;">
      <img src="https://simpleicons.org/icons/docker.svg" style="margin-right: 10px" width="30" height="30">
      <strong>Docker</strong>
    </div>
  </li>
</ul>

## Configuración inicial

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/juancuellardev/logistics-system.git
    ```
2. En la raíz del proyecto, instala las dependencias:

    ```bash
    cd logistics-system
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

## Endpoints

### Registrar un nuevo envío

- **URL**: `POST /envios`
- **Descripción**: Registra un nuevo envío en el sistema, calculando automáticamente la tarifa basada en la distancia proporcionada.
- **Body de la Solicitud**:
  
  ```json
  {
    "destinatario": "Nombre del destinatario",
    "remitente": "Nombre del remitente",
    "contenido": "Descripción del contenido",
    "fecha_envio": "Fecha de envío en formato ISO8601",
    "distancia": 100
  }
  ```
  Donde:
  - `destinatario`: El nombre del destinatario del envío.
  - `remitente`: El nombre del remitente del envío.
  - `contenido`: Descripción del contenido del envío.
  - `fecha_envio`: La fecha de envío en formato ISO8601 (por ejemplo, "2024-03-23T12:00:00").
  - `distancia`: La distancia del envío en kilómetros.
  
  Respuesta Exitosa:
  ```json
    {
    "id_envio": 1,
    "destinatario": "Nombre del destinatario",
    "remitente": "Nombre del remitente",
    "contenido": "Descripción del contenido",
    "fecha_envio": "Fecha de envío en formato ISO8601",
    "distancia": 100,
    "tarifa": 55
    }
  ```

### Listar todos los envíos registradosss


- **URL**: `GET /envios`
- **Descripción**: Devuelve una lista de todos los envíos registrados en el sistema.

## Ejemplo de uso

### Registrar un nuevo envío

```bash
curl -X POST \
  http://localhost:3000/envios \
  -H 'Content-Type: application/json' \
  -d '{
    "destinatario": "John Doe",
    "remitente": "Jane Doe",
    "contenido": "Producto A",
    "fecha_envio": "2024-03-23T12:00:00",
    "distancia": 50
  }'
```
### Listar todos los envíos

```bash
curl -X GET http://localhost:3000/envios
```
