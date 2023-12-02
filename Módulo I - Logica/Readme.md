## MÓDULO SOBRE LÓGICA LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CONJAVASCRIPT

1.	¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante en el desarrollo web Frontend.
 - La lógica es la manera de analizar e implementar soluciones a partir de escribir código en algún lenguaje de programación, en el desarrollo web Frontend es importante porque permite tener una manera de ser eficientes en el momento de crear los aplicativos desarrollados. 
2.	Definir el concepto de “algoritmo” y proporcionar un ejemplo sencillo de un algoritmo relacionado con la lógica de programación.
 - Un algoritmo es la secuencia de pasos que se requiere a partir de una acción, con la finalidad de obtener un resultado donde en muchas ocasiones el resultado esperado. 
    Ducharse solo si hay agua fría:
    	-meterse a la bañera
    	- abrir la llave del agua
    	- probar la temperatura del agua
    	¿el agua esta fría? 
    si la respuesta es: -> Si, entonces puede ducharse.
    	si la respuesta es: -> No, entonces cierre la llave y salga de la bañera.

3.	¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.
    Las estructuras de control, son fragmentos o partes de código que se utilizan para evaluar ciertas condiciones dentro del objetivo que se quiere desarrollar. 
    Los tipos de estructuras de control son:
    •	Secuenciales: estas se ejecutan una seguida de la otra, donde si llega a fallar una se detiene la ejecución del programa y puede producir errores
    •	Selectivas o Condición.: este tipo de estructura evalúa una condición previamente definida, el cual tiene la opción de escoger entre dos respuestas, y según el resultado obtenido realiza cierta acción.
    •	Iterativas o Cíclicas: se denomina iterativas debido a que se emplean para realizar tareas que pueden ser recrearse en muchas ocasiones, como también puede estar definida la cantidad de veces a ejecutar. 

4.	Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.

  - Antes de la introducción del ECMAScript 6, se empleaba la palabra reservada `var` para las variables y para las constantes se empleaba la palabra `const`. Con la llegada el ES6 se presentan cambios positivos en el desarrollo de código debido al cambio realizado para las variables se emplea el uso de `let`, a su vez introdujo mejoras para mantener un código mas limpio y fácil de entender. 

5.	¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.
- Para el declarar una función en JS se realiza a través de una palabra reservada del mismo lenguaje el cual puede variar según la necesidad que tenga el programador. 

	Declaración de una función
```javascript
	Function suma(a,b){
	Return a+b;
}
Console.log(suma(4,6));
```
Expresión de una función
```javascript
	const suma = function (a,b){
	Return a+b;
}
Console.log(suma(4,6));
```
Funcion de flecha (Arrow)
```javascript
	const suma(a,b) => a+b{
	console.log(suma(4+6)
}
```

6.	¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.
- Se hace necesario el uso de funciones debido a que facilita a la hora de desarrollar un proyecto. Las razones fundamentales pueden ser:
	- Permite la escalabilidad del código, permitiendo así que sea mantenible en el tiempo
	- Permite reutilizar el código, logrando así escribir menos código y tiene menos probabilidad de fallos
    - Facilita el entendimiento de manera rápida del código desarrollado. 
7.	¿Cuál es la diferencia entre parámetro y argumento?
- Los parámetros son datos o valores que funcionan como inputs y son aquellos que recibe la función.  Por otro lado, los argumentos son los datos específicos que se pasan a una función. La principal diferencia entre ambos conceptos es debido a la ubicación donde se sitúa cada uno, el parámetro se ubica dentro de la declaración de la función, mientras que el argumento se encuentra cuando se invoca una funciona. 

8. Definir el concepto de Callback y proporcionar un ejemplo práctico.
- El Callback o llamada devuelta, es la manera en que se comunican dos funciones entre si, dejando claro que el Callback debe estar dentro de la función principal y se debe pasar como parámetro. 
    ```javascipt    
    const mensaje(nombre){
    	Console.log(“hola “, nombre);
    };
    Mensaje(“Zamir”)
    ```

9.	¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.
-   El hoisting es la manera en la cual las variables declaradas tienen la posibilidad de subir al principio del scope de la función que ha sido creada o declarada. 

10.	Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también cómo se declaran estas estructuras de datos.

-   Un objeto también conocido como `Object` es un tipo de estructura o variable que permite agrupar diversas propiedades con distintos valores ya sean datos simples o incluso funciones. La visión general es permitir agrupar variables bajo el método clave – valor, de manera organizada. 
    ```javascript
    Const fruta = {
    sabor: dulce
    color: verde
    tamaño: mediano
    };
    ```
11.	¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto?
-   Las propiedades son los atributos o valores asignados mediante las claves – valor de un objeto. La diferencia entre propiedades y un método en un objeto es principalmente de que las propiedades son valores almacenados en el objeto, los métodos son formas o acciones que dicho objeto puede realizar o llevar a cabo.  

12.	Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.
    •	Una de las formas de acceder a las propiedades es a través de la notación objeto.propiedad  
    •	Otra manera de acceder a las propiedades de un objeto es utilizar corchetes luego de llamar al objeto[‘propiedad’]
La manera en que conviene usar las diferentes formas puede variar dependiendo del contexto de los datos asignados a las propiedades, debido a que estos pueden ser estáticos se utilizan el método del punto, para datos dinámicos se utilizan los corchetes

13. ¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto.
- Si, existen diversas maneras de recorrer las propiedades de un objeto, utilizando ciclos repetitivos o a través de las claves o keys en las propiedades definidas del objeto creado. Una situación útil de recorrer un objetos es cuando queremos dibujar un dato en la un sitio web el cual puede provenir de una API o un archivo JSON.
    ```javascript
    //Utilizando un for….in
     
    const fruta = {
        sabor: 'dulce',
        color: 'verde',
        tamaño: 'mediano'
    };
    for (let propiedad in fruta) {
        console.log(`propiedad: ${propiedad}, valor:${fruta[propiedad]}`)
    }
    //utilizando Keys
    const fruta = {
        sabor: 'dulce',
        color: 'verde',
        tamaño: 'mediano'
    };

    const valores = Object.keys(fruta)
    valores.forEach(valor => {
        console.log(`propiedad: ${valor}, valor: ${fruta[valor]}`)
    });

14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar?
- Son colecciones de datos reunidos bajo un mismo grupo, el cual cada grupo u objeto debe contener lo que se llama clave y valor, los objetos pueden almacenar cualquier tipo de datos, ya sea números enteros, decimales, datos booleanos, o cadenas de caracteres. 
    ```javascript
    Const datosPersona = {
    	name: “Zamir”,
    	edad: “26”,
    	mayorDeEdad: true
    };
    ```

15. ¿Qué es un array en JavaScript y por qué son esenciales?
- Los Array o arreglos, son tipos de datos que se encuentran ordenados de una manera X, donde cada elemento tiene una posición asignada teniendo en cuenta que para el Array el primer elemento tiene el valor de 0. Los Arrays son esenciales debido a que nos facilitan la organización de datos, elementos o colección de elementos, las cuales podemos tener acceso a ellos mediante su posición en cualquier momento. 
16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.
- Como se mencionaba anteriormente, cada elemento dentro de un array tiene una posición previamente definida según en el orden que se encuentre dicho elemento, para acceder a un elemento del array existen diversas maneras, ya sea a través de un ciclo For o utilizando palabras reservadas según el lenguaje en el que se esté programando. 
    ```javascript
    const marcas = ['BWM', 'Ferrari', 'Mazda', 'Suzuki','Toyota']
    console.log(marcas[4]);
    ```
17. Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.
•	Filter: a partir de un Array definido, nos facilita la creación de otro array siguiendo una condición dada, donde los elementos creados en el nuevo array cumplen con la condición. 
•	ForEach: Se utiliza para recorrer un array, en ocasiones puede reemplazar a un bucle FOR.
•	Map: Nos sirve para recorrer un array, a partir de un array creado previamente, el cual nos crea mediante unas condiciones definidas un nuevo array de la misma longitud del array inicial. 
18. Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array.


