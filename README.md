# Aplicación Móvil 

Esta es una aplicación móvil sencilla con cinco pestañas, cada una con diferentes funcionalidades que te ayudarán en diversas tareas.

## Descripción

La aplicación ofrece una interfaz amigable con cinco pestañas que permiten al usuario acceder a diferentes funcionalidades, desde una biografía personal hasta herramientas útiles como una calculadora de ecuaciones cuadráticas.

## Características

1. **Biografía**: Una pequeña biografía sobre mí.
   <div align="center">
     <img src="https://github.com/user-attachments/assets/be064859-53be-4dd3-84a0-5acb9ae92b00" alt="Biografía" />
   </div>

2. **Enlace al Repositorio**: Una pestaña que contiene una imagen y un botón que te lleva al repositorio del proyecto en GitHub.
   <div align="center">
     <img src="https://github.com/user-attachments/assets/37f7477d-da56-464a-932a-9a547e7b02a0" alt="Enlace al Repositorio" />
   </div>

3. **Calendarios**: Dos calendarios que permiten elegir fechas y calcular la diferencia entre ellas.
   <div align="center">
     <img src="https://github.com/user-attachments/assets/92411c1a-fb1b-455c-a6f3-eeb55904f123" alt="Calendarios" />
   </div>

4. **Calculadora de Ecuaciones Cuadráticas**: Permite ingresar los valores de a, b y c para calcular las raíces de la ecuación mediante la fórmula general.
   <div align="center">
     <img src="https://github.com/user-attachments/assets/6c6484d3-f3e7-434b-8f27-03c72bd03831" alt="Calculadora" />
   </div>

5. **Notas**: Un área de texto donde puedes ingresar notas y guardarlas en un archivo de texto.
   <div align="center">
     <img src="https://github.com/user-attachments/assets/8dd5eaec-5774-4e57-b174-d8d596f7372d" alt="Notas" />
   </div>


## Tecnologías Utilizadas

- **Framework**: [Ionic](https://ionicframework.com/)
- **Lenguaje**: JavaScript / TypeScript

## Instalación

Instrucciones sobre cómo instalar y configurar el proyecto localmente.

```bash
# Clonar el repositorio
git clone https://github.com/Dustin1904/PruebBimestral.git

# Navegar al directorio del proyecto
cd PruebaBimestral

# Instalar dependencias
npm install
```
## APP Mejorada
Una aplicación debe contar con una pantalla de carga (splash screen) y un icono personalizado para distinguir su aplicación, en este caso se realiza una serie de procesos para realizar esto los cuales son detallados a continuación: 
### Creacion del splash screen e iconos
- Es necesario estar en el directorio donde se encuentra nuestro proyecto
- Necesitamos ejecutar el siguiente comando:
  ```bash
  npm install @capacitor/splash-screen
  ```
- Luego nos dirijimos a nuestro archivo "capacitor.config.ts" y agregamos la siguiente configuracion: 
```ts
  appId: 'io.ionic.starter',
  appName: 'PruebBimestral',
  webDir: 'www',
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0,
      "launchAutoHide": true,
      "launchFadeOutDuration": 3000,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": false,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": false,
      "splashImmersive": false,
      "layoutName": "launch_screen",
      "useDialog": false
    }
  }
```
- En nuestro archivo "app.component.ts" importamos el SplashScreen y 
```ts
import { SplashScreen } from '@capacitor/splash-screen';
```
- Establecemos una funcion que se encarga de ejecutar el SplashScreen
```ts
export class AppComponent {
  constructor() {
    this.splash();
  }
  async splash() {
    await SplashScreen.show({
      autoHide: true,
      showDuration: 5000
    });
  }
}
```
- Se procede a ejecutar el siguiente comando en la terminal:
  ```bash
  npm install @capacitor/assets
  ```
- En la raíz de nuestro proyecto debemos tener un directorio llamado "assets" en donde en colocaran las imagenes que proximamente serán nuestro splash e icono, una consideracion clave es que nuestro splash debe tener un tamaño de 2732px X 2732px y nuestro icono un tamaño de 1024px X 1024px
  <div align="center">
    ![image](https://github.com/user-attachments/assets/353de59f-249a-4d28-9e9a-d75e6708a73a)

  </div>

- Procedemos a ejecutar el siguiente comando
```bash
npx capacitor-assets generate
```
- Por ultimo solo resta generar la apk del proyecto para visualizarlo desde nuestro dispositivo, tambien se puede utilizar un emulador.

## SplashScreen
<div align="center">
  ![Imagen de WhatsApp 2024-11-04 a las 13 04 36_3158f8c9](https://github.com/user-attachments/assets/480c20a8-66c4-4fb8-8105-05fd96a98c88)
</div>
## Icono de la aplicación
<div align="center">
  ![Imagen de WhatsApp 2024-11-04 a las 13 04 35_f1a03cb8](https://github.com/user-attachments/assets/494ca241-b296-44d7-b4d8-9a96f9a5e368)

</div>
