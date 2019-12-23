# Zynch Middleware

## Instrucciones

1. Clonar el repositorio
2. Una vez clonado, ejecutar `npm install` en la carpeta principal `/`, en `/server` y en `client`
3. Existen varios scripts que se pueden ejecutar, ver el archivo `package.json` para más info.

   Ejecuta `npm run dev`, por ejemplo

```
dev:client -> Compila y ejecuta el cliente en modo development
dev:server -> Compila y ejecuta el servidor en modo development
dev        -> Ambos
build      -> Compila una versión de producción lista para el deploy
start      -> Ejecuta la app en modo clúster,  en su versión production
stop       -> Es obvio no?
delete     -> Eliminar la app del registro interno de pm2 (servidor clúster)
reload     -> Compila y ejecuta una nueva versión de producción del proyecto en modo clúster
```

4. ???
5. Profit

**Environment Files**

Por motivos de seguridad hay que crear archivos que contengan las variables de entorno necesarias para tener las configuraciones correctas y poder realizar las conexiones
a servicios externos como bases de datos y APIs de terceros, como Noodoe.

En la carpeta server, crear una carpeta llamada `.env` y en ella crear los
archivos `test.config.env`, `development.config.env` y `production.config.env`
que contengan las siguientes variables. _En el archivo `production.config.env`,
la variable `PORT` debe ser tener el valor `80`_.

```
IP=0.0.0.0
HOST=localhost
PORT=3001
CLIENT_HOST=localhost
CLIENT_PORT=3002
REDIS_URL=redis://redis:6379
SSL_KEY=[SSL_KEY_FILE_NAME]
SSL_CRT=[SSL_CRT_FILE_NAME]
DB_HOST=[MONGOLAB_DB_URL]
DB_USER=[MONGOLAB_DB_USERNAME]
DB_PASS=[MONGOLAB_DB_PASSWORD]
EMAIL_ADDRESS=[GMAIL_ADDRESS]
EMAIL_PASS=[GMAIL_PASSWORD]
NOODOE_API_URL=https://iusa-dev.server.noodoe.com/
```

En la carpeta `client`, crear dos archivos: `.env.development` y `.env.production`
con el siguiente contenido. De la misma manera, _en producción el puerto debe ser el `80`_.

```
HOST=0.0.0.0
PORT=3002
REACT_APP_HOST=localhost
REACT_APP_PORT=3001
SKIP_PREFLIGHT_CHECK=true
CHOKIDAR_USEPOLLING=true
```

# Highlights

- Estructura de carpetas por feature
- [[Docker]](https://www.docker.com/) containers
- [[HTTP/2]](https://http2.github.io/)
- [[React]](ttps://reactjs.org/) Cliente
- [[Redux]](https://redux.js.org/) Manejo de `state` en React
- [[Passport]](http://www.passportjs.org/) Autenticación local por medio de cookies
- [[EJS]](https://ejs.co/) Renderizado con EJS
- [[MongoDB]](https://mongoosejs.com/) Usando Mongoose (conector entre Node y Mongo
- [[NodeMailer]](https://nodemailer.com/about/) Emails
- [[Winston]](https://github.com/winstonjs/winston) Logging
- [[Mocha]](https://mochajs.org/) [Chai](https://www.chaijs.com/) para pruebas de código
- [[ESLint]](https://eslint.org/) Linter con reglas estrictas para mantener la calidad y limpieza del código , [JavaScript Standard Style](https://standardjs.com/)
- [[Webpack]](https://webpack.js.org/)
- [[PM2]](http://pm2.keymetrics.io/) Modo Clúster en Producción
