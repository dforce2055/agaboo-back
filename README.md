## AGABOO Back End - Cloud Functions para Firebase
![Firebase](https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png)
<br>
<em>by DForce2055</em>
<br>
Cloud Functions para Firebase te permite ejecutar automáticamente el código de backend en respuesta a eventos activados por las funciones de Firebase y las solicitudes HTTPS. Tu código se almacena en la nube de Google y se ejecuta en un entorno administrado. No necesitas administrar ni escalar tus propios servidores.

### Prerequisitos
Necesitas tener instalado un entorno Node.js (node -v^10.15.3), GIT (^2.17.1), y Firebase CLI (^7.3.0).<br>

1. [NodeJS](https://www.hostinger.com.ar/tutoriales/instalar-node-js-ubuntu/)

2. [Firebase CLI](https://firebase.google.com/docs/cli/?hl=es-419)
    - `npm install -g firebase-tools`

3. [GIT](https://git-scm.com/)
    - `apt-get install git`


Enlaces:<br>
[Functions Web App](https://firebase.google.com/docs/functions/?hl=en-419)<br>
[Functions Get Started](https://firebase.google.com/docs/functions/get-started?hl=es-419)<br>

### Paso-1
Bajarse el repositior de Git
#### `git clone https://github.com/dforce2055/agaboo-back.git`

### Paso-2
Crearse un proyecto en Firebase
1. En Firebase console, haz clic en Agregar proyecto y, luego, selecciona o ingresa el Nombre del proyecto.<br>
Si ya tienes un proyecto de Google Cloud Platform (GCP) existente, puedes seleccionarlo del menú desplegable Nombre del proyecto. De lo contrario, ingresa un nombre de proyecto nuevo.<br>

2. Edita el ID del proyecto (opcional).
Firebase asignará de manera automática un ID único a tu proyecto de Firebase. Consulta la Información sobre los proyectos de Firebase para obtener detalles sobre cómo usa Firebase el ID del proyecto.
Una vez que Firebase aprovisione los recursos para tu proyecto, no podrás cambiar su ID. 
Para usar un identificador específico, debes editar el ID del proyecto durante este paso de la configuración.<br>

3. Sigue los pasos de configuración restantes en Firebase console y, luego, haz clic en Crear proyecto (o Agregar Firebase si usas un proyecto de Google existente).<br>

Firebase aprovisiona los recursos para tu proyecto de forma automática. Cuando finalice, verás la página de descripción general del proyecto en Firebase console.


### Paso-3
Dentro de la carpeta del repositorio recientemente clonado ejecutar:
#### `firebase login`

### Paso-4
Selecciona el Proyecto <em>(previeamente creado)</em>
#### `firebase init`
#### `firebase use --add`

### Paso-5
Nos movemos al directorio principal de las funciones e instalamos las dependencias necesarias
#### `cd functions`
#### `npm install`

### Paso-
Desplegamos en nuestro Proyecto en Firebase <em>(previeamente creado)</em>
#### `firebase deploy --only functions`

