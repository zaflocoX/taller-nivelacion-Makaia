<h2 class="code-line" data-line-start=0 data-line-end=1 ><a id="MDULO_SOBRE_LGICA_LGICA_DE_PROGRAMACIN_Y_PROGRAMACIN_CONJAVASCRIPT_0"></a>MÓDULO MODULO II - HTML, CSS Y RESPONSIVE DESIGN</h2>
<ol>
<li class="has-line-data" data-line-start="2" data-line-end="3">¿Qué significa HTML y cuál es su función en el desarrollo web?</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="3" data-line-end="5">Las siglas HTML quieren decir HyperTex Markup Language,  lo cual significa lenguajes de marcas de hipertexto; se basa en un  lenguaje de marcas que facilitan la creación de documentos que pueden ser compartidos  y visualizados a través de internet. El Funcionamiento del  HTML  en el desarrollo web, consiste en la creación del documento esqueleto de una pagina web, la cual se encuentra estructurada mediante etiquetas previamente definidas que funcionan como instrucciones para la correcta interpretación de los ordenadores</li>
</ul>
<ol start="2">
<li class="has-line-data" data-line-start="5" data-line-end="6">¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales.</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="26">Se basan en dos parte principales encabezado y el cuerpo.
<ul>
<li class="has-line-data" data-line-start="7" data-line-end="8">Cuando se habla del encabezado es el sector que se encuentra en la parte superior de la página, el cual nos brinda información de la pagina web como los metadatos; a su vez este se define con la etiqueta &lt;head&gt; y se cierra con la etiqueta &lt;/head&gt;.</li>
<li class="has-line-data" data-line-start="8" data-line-end="26">El cuerpo es la unidad que abarca todo lo visible de la página, como lo es texto, imágenes, videos, etc. Este se define por la etiqueta &lt;body&gt; y se cierra con la etiqueta &lt;/body&gt;.<pre><code class="has-line-data" data-line-start="10" data-line-end="25">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
//Inicio del encabezado
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
/* Fin del encabezado*/
//Inicio del cuerpo del documento
&lt;body&gt;
&lt;/body&gt;
//Fin del cuerpo del documento
&lt;/html&gt;
</code></pre>
</li>
</ul>
</li>
</ul>
<ol start="3">
<li class="has-line-data" data-line-start="26" data-line-end="27">¿Qué es CSS y cuál es su propósito en el desarrollo web?</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="27" data-line-end="29">Las hojas de estilo en cascada, Cascading Style Sheets sus siglas en ingles CSS, es el lenguaje por el cual se crea la presentación que se desean para una página web. Tiene como propósito la implementación de los diseños, formas, figuras, colores, etc. Las cuales permiten elaborar un diseño atractivo a una página web.</li>
</ul>
<ol start="4">
<li class="has-line-data" data-line-start="29" data-line-end="31">¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta. a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="31" data-line-end="32">Los selectores CSS se implementan para definir los elementos HTML de la página web a lo que queremos aplicar estilo. se puede decir que los selectores definen sobre que elementos se aplicara un conjunto de reglas CSS.</li>
<li class="has-line-data" data-line-start="32" data-line-end="38">Los principales tipos de selectores son:
<ul>
<li class="has-line-data" data-line-start="33" data-line-end="34">Selector de tipo</li>
<li class="has-line-data" data-line-start="34" data-line-end="35">Selector de clase</li>
<li class="has-line-data" data-line-start="35" data-line-end="36">Selector de ID</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">Selector universal</li>
<li class="has-line-data" data-line-start="37" data-line-end="38">Selector de atributo</li>
</ul>
</li>
<li class="has-line-data" data-line-start="38" data-line-end="40">La especificidad es importante porque nos permite determinar qué estilo se aplica en cada elemento. Cuanto más especifico sea un selector, mayor será su valor en punto y más probable será que esté presente en el estilo del elemento.</li>
</ul>
<ol start="5">
<li class="has-line-data" data-line-start="40" data-line-end="42">
<p class="has-line-data" data-line-start="40" data-line-end="41">Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.</p>
</li>
<li class="has-line-data" data-line-start="42" data-line-end="43">
<p class="has-line-data" data-line-start="42" data-line-end="43">¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?</p>
</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="43" data-line-end="45">Es la manera en que se distribuye los elementos en filas o columnas, dibujado en el HTML; de igual forma es un método que puede ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineamiento.</li>
</ul>
<ol start="7">
<li class="has-line-data" data-line-start="45" data-line-end="46">Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="46" data-line-end="52">A la hora de volver flexible un contenido se pueden utilizar diferentes propiedades entre ellos:
<ul>
<li class="has-line-data" data-line-start="47" data-line-end="48">Row: Alinea los elementos contenidos en el divisor de en forma de línea o en forma de fila.</li>
<li class="has-line-data" data-line-start="48" data-line-end="49">row-reverse: Como su nombre indica, lo que hace es crear la línea o fila de elementos de manera inversa.</li>
<li class="has-line-data" data-line-start="49" data-line-end="50">Column: Alinea los elementos contenidos del divisor en forma de columna, es decir de arriba hacia abajo.</li>
<li class="has-line-data" data-line-start="50" data-line-end="52">Column-reverse: Alinea los elementos de manera inversa manteniendo su orientación en forma de columna</li>
</ul>
</li>
</ul>
<ol start="8">
<li class="has-line-data" data-line-start="52" data-line-end="53">¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="53" data-line-end="55">CSS Grid Layout es una herramienta la cual nos facilita dividir en cuadriculas la página web; a diferencia de flexbox que es un instrumento el cual nos permite crear filas y columnas.</li>
</ul>
<ol start="9">
<li class="has-line-data" data-line-start="55" data-line-end="56">Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.</li>
</ol>
<pre><code class="has-line-data" data-line-start="57" data-line-end="78" class="language-&lt;!DOCTYPE">&lt;html lang=&quot;es&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Cuadrícula con CSS Grid&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Ejemplo de CUadricula GRID &lt;/h1&gt;
    &lt;div class=&quot;grid-container&quot;&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 1&lt;/div&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 2&lt;/div&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 3&lt;/div&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 4&lt;/div&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 5&lt;/div&gt;
        &lt;div class=&quot;grid-item&quot;&gt;Celda 6&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<pre><code class="has-line-data" data-line-start="79" data-line-end="101">body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tres columnas con ancho igual */
    gap: 20px; /* Espacio entre las celdas */
    padding: 20px;
}

.grid-item {
    background-color: #3498db;
    color: #fff;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</code></pre>
<ol start="10">
<li class="has-line-data" data-line-start="101" data-line-end="102">¿Qué significa el diseño responsivo en el contexto del desarrollo web?</li>
</ol>
<ul>
<li class="has-line-data" data-line-start="102" data-line-end="104">Es la manera en que se elaboran sitios web que se adaptan a las diferentes resoluciones de la pantalla como un celular, computador o table, desde la cual se visite el sitio web, por lo cual todos los elementos de una pagina web deben ajustarse al ancho y alto de la pantalla.</li>
</ul>
<ol start="11">
<li class="has-line-data" data-line-start="104" data-line-end="112">Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.<br>
•   Tamaño de visualización<br>
•   Tamaño de navegación<br>
•   Contenidos textuales<br>
•   Contenidos visuales<br>
•   Identificación de marca<br>
•   Botones de acción</li>
</ol>