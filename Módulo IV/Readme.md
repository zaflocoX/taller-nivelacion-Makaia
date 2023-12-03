## MÓDULO IV - COMUNICACIÓNCON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONÍASY PETICIONES HTTPS)

1.	Definir brevemente el concepto de localStorage y sessionStorage. 
 - Herramientas que nos permiten guardar o almacenar información, datos de manera local en nuestro navegador web a modo de sesión.

2.	Describir las diferencias claves entre localStorage y sessionStorage.
 - Estas se diferencian en que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se este utilizando siga abierta, una vez cerrada la información se elimina.
 
3.	¿Por qué son útiles para almacenar datos en el navegador y cuáles su límite de capacidad?
- Son útiles por que permiten guardad pares de clave/valor en el navegador.
Estos pueden almacenar entre 5 y 10MB dependiendo del navegador web. 

4.	¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?
- Las promesas en JavaScript facilitan el control de flujo de datos asíncronos en la pagina web, de igual forma se destaca por su versatilidad y eficacia. Estas se utilizan para simplificar los cálculos diferidos y asíncronos.

5.	Explica el concepto de asincronía en programación y cómo las promesas ayudan a manejar operaciones asincrónicas.
- Hace referencia al uso de hilos de ejecución o threads del procesador para ejecutar mas de un proceso a la vez en el aplicativo. 

6.	Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.

7.	¿Qué es JSON Server y cómo se utiliza en el desarrollo web?
- Es un documento digital que permite tener acceso, almacenamiento e intercambio de datos o información organizada, con el fin de hacer más simple la búsqueda. En el ámbito de paginas web se implementa cuando se busca que el sitio lea correctamente la información contenida y que sea de forma óptima.

8.	¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?
- De esta forma nos podemos asegurar de que el servidor se inicie en modo de observación, es decir, que se observe los cambios en el archivo y actualice la API expuesta en consecuencia. 

9. ¿Cuáles son las diferencias claves entre los métodos del objetopromesa.then().catch()y las palabras claves async/await?

10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes(GET, POST, PUT, PATCH y DELETE)a través de ella.

11. Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.
- La herramienta axios es much mas completa que Fetch, ya que nos brinda mas posibilidades, como el uso de interceptors en una petición HTTP, de igual forma Axios es una librería y Fetch es una instrumento nativa del navegador.

12. ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?
- Por medio de esta herramienta podemos aumentar el rendimiento del sitio web.

13. Proporciona ejemplos de cómo se utilizan Fetchy Axios para realizar solicitudes GET y POST.

14. Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.
- Las promesas encadenadas son excelentes manajenado los errores. Cuando una promesa es rechazada, el control salta al menejador de rechazo más cercano.

15. Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.

16. ¿Cuáles son las diferencias claves entre los métodos del objetopromesa.then().catch()y la estructura try/catch?
 - Se diferencian en que el primer método solo la podemos usar cuando trabajamos con promesas y el otro método cuando utilizamos async await.


