# A_HolaMundo

Proyecto de hola mundo como introduccion a un proyecto de angular.

## Estructura

### e2e

> Esta carpeta pruebas de extremo a extremo, esta destinada a contener todos los tipos de pruebas unitarias, de aplicacion, etc.  

### node_modules

> Contiene todos los modulos de **node**, tiende a ser muy grande, pero esta destinada solo a **desarrollo**, esta carpeta se crea a partir del archivo **package.json**  

~~~ts
    npm install //En caso de que la carpeta sea borrada.
~~~

### src(Source)

> Esta carpeta contiene la aplicacion web en si, es donde se encuentra el proyecto y todos los archivos que refieren al mismo.  

### app

#### app.component.ts

> primer archivo que nuestra aplicacion de **Angular** va a ejecutar. Esta definido en el archivo **index** como **app-root /app-root**

#### app.component.css

> archivo de estilos que se aplican en **app.component.html**

#### app.component.html

> Archivo en html que representa el contenido de la app.

#### app.component.spec.ts

> Archivo de pruebas automatizadas.

#### app.module.ts

> Archivo donde se define que componentes, servicios, etc. tiene angular para ejecutar en la app.

### assets

> Esta carpeta esta destinada a guardar contenido de persistencia, como imagenes, videos, etc.

### polyfills.ts

> Este archivo se encarga de la retrocompatibilidad entre navegadores viejos con la app.

### styles.css

> Archivo de estilos globales en la app.

### karma.conf.js

> archivo de configuracion de las pruebas de karma.

### .editorConfig

> Archivo con las configuraciones del editor donde se esta trabajado.  

### angular.json

> Este archivo añade configuracion a la aplicacion de angular y dicta como debe ser ejcutada para **angular CLI**

### package-lock.json

> Archivo que contiene todo lo relacionado con los paquetes que **packjage.json** tiene einstalados, generando un historial de como se creo.  

`*Nota: no se maniupula manualmente`  

### package.json

> Establece las caracteristicas de la app donde se establece que dependencias va necesitar en produccion, se genera automaticamente al momento de estar desarrollando.  

`*Nota: no se maniupula manualmente`  

### tsconfig.json

> este archivo determina las reglas del compilador, como la version de ***es*** a la que el codigo debe ser generado.  

### tslint.json

> Establece reglas para la codificaccion y desarrollo de la aplicacion  

### Directivas estructurales

> Atributos especiales para manejar el **DOM** y sus elementos a fin de agregar funcionalidad y dinamismo a los elementos que se contengan en el **DOM**.
> Al agregar una directiva estructural a un elemento, este en tiempo de compilacion pasa a envolver en una etiqueta el elemento al que se le agrego dicha directiva y todos y cada uno de lo elementos dentro de ella pasan a ser **hijos** y por tal razon estos heredaran comportamiento que se le aplique al padre.  
> **DOM (Modelo de Objetos del Documento):** API para documentos HTML y XML, define la estructura logica de los documentos y el modo en que se accede y manipula el mismo, es decir que a tra vez de esta API se pueden manipular, navegar por su estructura y eliminar elementos pertenecientes al documento.

#### Tipos de directivas

> **De componente:** administra una region **HTML** de manera nativa a manera de template.  
`*Nota: Pueden aplicarse solo una por elemento`  
> **De atributo:** Este tipo de directivas se encargan de manejar la apariencia o comportamiento de un elemento.  
`*Nota: Pueden aplicarse varias a un mismo elemento`  
> ***ngIf:** Esta directiva analiza una exprecion booleana y hace que determinada porcion del **DOM** aparezca o desaparezca, ademas puede utilizar operandos logicos (&&, ||, etc).  
`*nota: Esta opcion es mas eficiente que hacerlo mediante CSS debido a que permite que no se cargada por el compilador.`  
>***ngFor:** permite generar interaciones de elementos HTML, funcionando a partir de arreglo de elementos.  
