## SOBRE DOM E INTERACCIÓN CON EL DOM 

1.	¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web?
-  DOM son las siglas de document object model, es la manera de dar jerarquia a los elementos que tiene una página web, con la finalidad de obtener acceso a dichos elementos creados y permitirles realizar acciones para interactuar con el usuario.

2.	¿Cuál es la diferencia entre el DOM y el HTML en una página web? 
- El modelo de objetivos del documento DOM es un modelo independiente del lenguaje formado por objetos que representan la estructura de un documento; mientras que el HTML es un lenguaje para redacción de dichos documentos. 

3. ¿Por qué es importante entender y manipular el DOM en el desarrollo web Frontend? 
- Comprender el DOM es importante porque sabremos como según como este definida una página web podremos conocer su jerarquia, el saber manipular el DOM nos permite darle funcionalidad al elemento que se desee de la manera correcta. 

4. ¿Qué son los eventos del DOM y cuál es su función en una página web? 
- Los eventos del DON son especies de señales de que algo ocurrió. Es una notificación de alguna característica interesante acabada de ocurrir y que se puede hacer al respecto. 

5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoad”. 
- document.getElementById(): Este método te permite seleccionar un nodo específico del árbol del DOM según su ID. Por ejemplo, si tienes un elemento de párrafo con el ID "mi-parrafo", puedes seleccionarlo usando document.getElementById("mi-parrafo").
- document.getElementsByClassName(): Este método te permite seleccionar nodos según su clase. Por ejemplo, si tienes varios elementos de párrafo con la clase "mi-parrafo", puedes seleccionarlos todos usando document.getElementsByClassName("mi-parrafo").
- document.getElementsByTagName(): Este método te permite seleccionar nodos según su etiqueta HTML. Por ejemplo, si tienes varios elementos de párrafo en tu página web, puedes seleccionarlos todos usando document.getElementsByTagName("p").

6.	¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se añaden controladores de eventos a los elementos del DOM? 
- Este juega un papel importante ya que permite una respuesta dinámica entre el usuario-web y de esta forma poder crear elementos personalizados y facilitar su uso. 

7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript. 
- Métodos tradicionales 
    - getElementByid()
    - getElementsByClassName(class)
    - getElementsByName(value)
    - getElementsByTagName(tag)
- Métodos modernos 
    - .querySelector() y .querySelectorAll()
8.	¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript? 
- Para recrear dicho evento al HTML deben seguirse los siguientes pasos:
    - Crear el documento que contiene la informacion HTML
    - Haciendo uso del evento **_document.createElement_** ('etiqueta a asignar evento') se crea el elemento
    - Lego agregamos el elemento creado al DOM
9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas? 
- Esta nos proporciona una forma eficaz y flexible de interactuar con la web; las cuales respondan a las entradas y eventos del usuario. De igual manera, suministra la creación de diseños accesibles y responsivos. 

10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.
- Event bubbling:
    - Este evento consiste en que el elemento que este contenido dentro de un elemento mayor o elemento padre, al aplicarle un evento lo que hace es saltar o encapsular dicho evento hasta llegar a la raiz o al padre del elemento. 
- Event delegation:
    - Es la manera en que se decide agregarle un evento a un elemento principal o elemento contenedor o padre, donde luego los elementos hijos o heredados del elemento padre van contener eventos en funcion del evento creado al padre. 

11. ¿ Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la gestión de eventos en páginas web con múltiples elementos interactivos?
- Los eventos **event bubbling** y **event delegation** son importantes y relevantes debido a que permiten diversas cualidades o caracteristicas
    - Reduccion de codigo: permite escribir menos codigo debido a que una vez entendido estos conceptos no es necesario recrear tantos eventos para elementos indivualmente
    - Legibilidad del codigo: permite escribir un codigo más limpio y que puede mejorarse con el tiempo

