# HackTheOceanBackend

![](./assets/header.png)

# HackTheOcean :turtle:

## Preservacion de especies maritimas en peligro de extincion


URL de API: https://inspiring-horse-d14449.netlify.app/.netlify/functions/api

Api de un crud de Explorers y Mission Comanders

Requerimientos

 - Servidor Postgresql, usuario y contraseña
 - Aplicacion Vue para consumir esta API: https://github.com/JosafatJimenezB/Hackaton-HacktheOcean-Frontend

Instalar proyecto
```
npm install
```

## para correrlo en localhost

en el archivo .env cambiar usuario y contraseña de la base de datos
```
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/avistamientos?schema=public"
```

Inicializar BD
```
npx prisma migrate dev --name init
```
Insertar Datos 
```
node prisma/seed.js
```

## Ahora si, todo listo para levantar el servidor
```
npm run serve
```

abrir en navegador http://localhost:3000

## Endpoints

endpoints for Biologos
method|url|descripcion
|---|---|---|
get | [/biologo](https://inspiring-horse-d14449.netlify.app/.netlify/functions/api/biologo) | Obtener lista de Borar biologos
get | [/biologo/:id]((https://inspiring-horse-d14449.netlify.app/.netlify/functions/api/biologo/6) | Obtener info de un Borar biologo por id
post | /biologo | Agregar Nuevo
put | put /biologo/:id | Actualizar 
delete | /biologo/:id | Borar


endpoints for especies
method|url|descripcion
|---|---|---|
get | /especies | Obtener lista de especies
get | /especies/:id | Obtener info de un especie por id
post | /especies | Agregar Nuevo especie
put | /especies/:id | Actualizar especie
delete | /especies/:id | Borar especie

endpoints for ubicaciones
method|url|descripcion
|---|---|---|
get | /ubicaciones | Obtener lista de ubicaciones
get | /ubicaciones/:id | Obtener info de un ubicaciones por id
post | /ubicaciones | Agregar Nuevo ubicaciones
put | /ubicaciones/:id | Actualizar ubiciaciones
delete | /ubicaciones/:id | Borar ubicaciones

Respuesta estandar de la API
```
{
   success: Boolean, // indica si hubo algun error al tratar de resolver la peticion
   code: string,     // codigo de error
   msg: string,      // mensaje de error o confirmacion
   payload: array,   // informacion entregada en la respuesta al cliente
}
```


## Backend

- CRUD.
- Base de datos.
- API's.
- Pruebas de unidad.
- Dependencias.
- Tecnologias(NodeJS).

## Herramientas

Proceso

![diagramaProceso](https://user-images.githubusercontent.com/2847834/168501523-c72db70f-4f65-4747-8e70-888dc6fd6229.png)


- Base de datos: PostgresSql

# Tablas

```mermaid
 classDiagram
      class Especie{
          + id (Int)
          + especie(varchar(128))
          + nombreCientifico(varchar(128))
          + familia(varchar(128))
          + biologo_id(fk)
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      class Biologo{
          + id
          + nombre(varchar(128))
          + organizacion(varchar(128))
          + especialidad(charfield)
          + pais(varchar(128))
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      class Ubicaciones{
          + id
          + coordenadas (varchar(255))
          + ph(Float)
          + especie_id(fk)
          + biologo_id(fk)
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      class Usuarios{
          + id
          + ususario (varchar(255))
          + password(varchar(255))
          + BiologoId(fk)
          + biologo_id(fk)
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      
```

## Actualizaciones

- Idioma ingles
- Otras Especies no marinas
