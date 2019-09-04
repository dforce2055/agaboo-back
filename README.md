## AGABOO Back End - Cloud Functions para Firebase
![Firebase](https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png)
<br>
<em>by DForce2055</em>
<br>
Cloud Functions para Firebase te permite ejecutar automáticamente el código de backend en respuesta a eventos activados por las funciones de Firebase y las solicitudes HTTPS. Tu código se almacena en la nube de Google y se ejecuta en un entorno administrado. No necesitas administrar ni escalar tus propios servidores.

### Prerequisitos
Necesitas tener instalado un entorno Node.js (node -v10.15.3 o superior) y Firebase CLI.
#### `npm install -g firebase-tools`

Enlaces:<br>
https://firebase.google.com/docs/functions/?hl=en-419<br>
https://firebase.google.com/docs/functions/get-started?hl=es-419<br>

### Paso-1
Bajarse el repositior de Git
git clone 

### Paso-2
Crearse un proyecto en Firebase
A-En Firebase console, haz clic en Agregar proyecto y, luego, selecciona o ingresa el Nombre del proyecto.<br>
Si ya tienes un proyecto de Google Cloud Platform (GCP) existente, puedes seleccionarlo del menú desplegable Nombre del proyecto. De lo contrario, ingresa un nombre de proyecto nuevo.<br>

B-Edita el ID del proyecto (opcional).
Firebase asignará de manera automática un ID único a tu proyecto de Firebase. Consulta la Información sobre los proyectos de Firebase para obtener detalles sobre cómo usa Firebase el ID del proyecto.
Una vez que Firebase aprovisione los recursos para tu proyecto, no podrás cambiar su ID. 
Para usar un identificador específico, debes editar el ID del proyecto durante este paso de la configuración.<br>

C-Sigue los pasos de configuración restantes en Firebase console y, luego, haz clic en Crear proyecto (o Agregar Firebase si usas un proyecto de Google existente).<br>

Firebase aprovisiona los recursos para tu proyecto de forma automática. Cuando finalice, verás la página de descripción general del proyecto en Firebase console.


### Paso-3
Ejecuta 
#### `firebase login`

### Paso-4
Selecciona el Repositorio
#### `firebase use --add`


### Paso-5
Deploy
#### `firebase deploy --only functions`

