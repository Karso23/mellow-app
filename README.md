# Aplicacion que despliega una lista de usuarios en pantalla y borra el usuario dando click en el boton de borrar

## Pasos para correr la aplicación en forma local

Esta guía describe los pasos necesarios para correr la aplicación en tu máquina local.
<br>
<br>

> ### 1.- Clonar o hacer fork al repositorio

<br>
Para correr la aplicación localmente, primero necesitas clonar o hacer fork al repositorio. Puedes hacerlo mediante la interfaz web de GitHub o mediante la línea de comandos. Si decides clonar el repositorio, ejecuta el siguiente comando en tu terminal:

```
// Ejemplo:

git clone "url del repositorio"

```

<br>
<br>

> ### 2.- Instalar dependencias

<br>
Una vez que tengas el repositorio en tu máquina local, debes instalar las dependencias necesarias para la aplicación. Para hacerlo, asegúrate de tener Node.js y npm instalados en tu máquina y ejecuta el siguiente comando en la raíz del repositorio clonado:

```

npm install

```

<br>
<br>

> ### 3.- Iniciar el servidor

<br>
Para correr el servidor de la API, debes posicionarte dentro de la carpeta `api` y ejecutar el siguiente comando:

```

nodemon server.js

```

Esto iniciará el servidor en `http://localhost:3001` por defecto.
<br>
<br>

> ### 4.- Iniciar la aplicación

<br>
Para correr la aplicación, debes posicionarte en la carpeta raíz de la aplicación y ejecutar el siguiente comando:

```

npm start

```

Esto cargará la aplicación en `http://localhost:3000`.
<br>
<br>

> ### 5.- Reiniciar la base de datos

<br>
Si deseas reiniciar la base de datos solo deten el servior desde consola, vuelvelo a iniciar y recarga la pagina.
<br>
<br>
¡Listo! Ahora puedes usar la aplicación localmente.

=========================================================================
<br>
<br>

# Notas extras

> ## Pasos básicos a seguir para poder asegurar las llamadas HTTP utilizando JWT

El usuario se tiene que autenticar para recibir sus credenciales en el Token que genera el servidor y se lo devuelve al usuario
Ese token deberia de quedar guardado en el localstorage del usuario para que cada vez que haga una peticion al servidor el servidor solo verifique que siga siendo valido el token
Debido a esto la aplicacion tendria que guardar en el localstorage ese token para que cada vez que el usuario mande una peticion al servidor se mande ese token en el header de la peticion.

<br>
<br>

> ## Flujo General de como se implementaria un a Autenticacion basada en 0Auth

El usuario manda la solicitud de inicio de sesion al servidor de autorización de OAuth.

El servidor de OAuth deberia mostrar una pantalla de autorización que solicita al usuario su consentimiento para otorgar acceso a los recursos protegidos.

Si el usuario concede acceso, el servidor de autorización de OAuth redirige al usuario a la aplicación web con un token de acceso en la URL que se almacena en el local storage del navegador.

La aplicación web utiliza ese token de acceso para solicitar los recursos de la API RESTful.

La ventaja es que podemos nosotros tambien establecer el tiempo de vida que puede Tener el Token para que sea valido y volver a solicitar las credenciales y no depender unicamente que la cookie que se guarda en el navegador sea borrada.
