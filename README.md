
# Sistema de Autenticación de Usuarios

Este proyecto es un sistema de autenticación de usuarios desarrollado con Node.js. Proporciona registro de usuarios, inicio de sesión, y manejo de sesiones utilizando JSON Web Tokens (JWT).

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/ElAlgoritmoDeLaNoche/Autenticacion_de_usuarios.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Autenticacion_de_usuarios
   ```

3. Instala las dependencias:
   ```bash
   yarn install
   ```

4. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   PORT=3000
   MONGO_URI=tu_mongo_uri
   JWT_SECRET=tu_secreto_jwt
   ```

## Uso

1. Inicia el servidor:
   ```bash
   node --watch index.js
   ```
  * Tener la versión de node 22.1.0 o superior.

2. El servidor estará corriendo en `http://localhost:3000`.

3. Usa herramientas como Postman para probar los endpoints de autenticación.

## Características

- Registro de usuarios.
- Inicio de sesión con JWT.
- Autenticación de rutas protegidas.
- Manejo de sesiones con tokens.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Francisco Navarrete - [franknavarrete11@icloud.com](mailto:franknavarrete11@icloud.com)

Proyecto Link: [https://github.com/ElAlgoritmoDeLaNoche/Autenticacion_de_usuarios](https://github.com/ElAlgoritmoDeLaNoche/Autenticacion_de_usuarios)
