config
Directorio para alojar archivos de configuración, no se deberian subir a github,
pero si a firebase y dentro de tu repositorio local.

Por ejemplo archivos de configuración para poder ejecutar las funciones de forma local:
1-Ejecuta funciones de manera local => https://firebase.google.com/docs/functions/local-emulator?hl=es-419
2-Agrega el SDK de Firebase Admin a tu servidor => https://firebase.google.com/docs/admin/setup?hl=es-419

###NUNCA PERO NUNCA SUBIR EL ARCHIVO DE CONFIGURACIÓN AL REPOSITORIOS###
Agregar el archivo a .gitignore para que no lo suba

# Ejecurar entorno local
firebase emulators:start --only functions

# Archivo de Config.
/*var serviceAccount = require("/home/dforce/Programacion/Firebase/Agaboo/agaboo-back/functions/config/agaboodforce-clave.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://agaboodforce.firebaseio.com"
});*/