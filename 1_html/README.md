# HTML

### Contenedores semanticos
- [Contenedores semanticos](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Buenas practicas HTML](https://drive.google.com/drive/u/1/folders/1347a8z1rco_at4uKd73A4Rr2wt3xTGpW)

---

## `<section>` vs `<article>`, cual usar?

La diferencia clave es esta:

<section>: agrupa contenido que pertenece a una misma temática dentro de una página.
<article>: representa contenido autónomo e independiente, que tendría sentido por sí mismo fuera de donde está.
<section>

Usalo cuando querés dividir una página en partes temáticas.

<main>
  <section>
    <h2>Sobre nosotros</h2>
    <p>Somos una empresa de desarrollo web.</p>
  </section>

  <section>
    <h2>Servicios</h2>
    <p>Ofrecemos desarrollo frontend y backend.</p>
  </section>
</main>


Cada section representa un tema diferente de la página.

Una buena regla práctica: si la sección tiene un título (h2, h3, etc.) que describe su contenido, probablemente section tenga sentido.

<article>

Usalo cuando el contenido podría distribuirse o reutilizarse independientemente.

Por ejemplo, en un blog:

<main>
  <h1>Últimas noticias</h1>

  <article>
    <h2>Nuevo lanzamiento de JavaScript</h2>
    <p>Se anunció una nueva versión...</p>
  </article>

  <article>
    <h2>Guía de CSS Grid</h2>
    <p>CSS Grid permite crear layouts...</p>
  </article>
</main>


Cada article podría aparecer por separado en un feed, RSS, buscador, etc.

También sirve para:

publicaciones de un blog
noticias
comentarios
posts de un foro
fichas/reseñas independientes
productos que se muestran como unidades independientes
¿Se pueden combinar?

Sí, y es bastante común.

<main>
  <section>
    <h2>Noticias de tecnología</h2>

    <article>
      <h3>Nuevo iPhone</h3>
      <p>...</p>
    </article>

    <article>
      <h3>Nuevo procesador AMD</h3>
      <p>...</p>
    </article>
  </section>

  <section>
    <h2>Noticias de deportes</h2>

    <article>
      <h3>Final del campeonato</h3>
      <p>...</p>
    </article>
  </section>
</main>


Pensalo así:

section = "una parte temática de esta página"
article = "una pieza de contenido que podría vivir por sí sola"

¿Y si simplemente quiero agrupar elementos?

Ahí probablemente <div> sea más apropiado.

<div class="card">
  <img src="foto.jpg" alt="Foto">
  <p>Texto decorativo</p>
</div>


No uses section solo porque querés aplicar CSS o crear un contenedor. section tiene significado semántico; div es un contenedor genérico.

Regla rápida: si estás dudando entre section y article, preguntate: "¿Este contenido podría ser considerado una pieza independiente?" Si sí → article. Si es una agrupación temática dentro de algo mayor → section.


---

## Importa esto de cara al SEO?
Sí, importa más por semántica y estructura que por un “puntaje SEO” directo.

Google no te va a posicionar mejor simplemente por usar <article> en vez de <section>. No existe algo como:

<article>  → +10 SEO
<section>  → +5 SEO


Lo importante es que la estructura HTML represente correctamente el contenido.

En SEO, priorizaría esto
Contenido útil y relevante
Títulos (h1, h2, h3) bien estructurados
Buena experiencia de usuario
URLs, enlaces internos, imágenes, rendimiento, etc.
HTML semántico correcto

<section> y <article> ayudan principalmente a que el documento tenga una estructura semántica clara, lo cual es bueno para accesibilidad y para que los navegadores/robots puedan interpretar mejor la página.

Un ejemplo práctico

Supongamos una página de un blog:

<main>
  <h1>Noticias de tecnología</h1>

  <article>
    <h2>Nuevo procesador de AMD</h2>
    <p>...</p>
  </article>

  <article>
    <h2>La evolución de JavaScript</h2>
    <p>...</p>
  </article>
</main>


Acá article tiene mucho sentido porque cada noticia es una unidad independiente.

En cambio:

<main>
  <h1>Mi empresa</h1>

  <section>
    <h2>Quiénes somos</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Nuestros servicios</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Contacto</h2>
    <p>...</p>
  </section>
</main>


Acá section describe mejor la estructura de la página.

Lo que NO haría por SEO

No elegiría:

<article>
   ...
</article>


en vez de:

<section>
   ...
</section>


pensando que <article> "posiciona mejor".

Y tampoco llenaría todo de section:

<section>
  <section>
    <section>
      <section>
        <p>Hola</p>
      </section>
    </section>
  </section>
</section>


Si no hay una razón semántica para esas secciones, probablemente deberían ser div.

En resumen: para SEO, la diferencia directa es pequeña o inexistente. Elegí article o section según qué representa el contenido, y preocupate mucho más por una buena jerarquía de encabezados y contenido de calidad.


---

## Que era el [SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es)?
seo

**SEO** (Search Engine Optimization) es el conjunto de técnicas y estrategias destinadas a mejorar la **visibilidad orgánica** (no pagada) de un sitio web en los resultados de los motores de búsqueda como **Google**, **Bing** o **Yahoo**. Su objetivo principal es aumentar el **tráfico cualificado** al aparecer en posiciones más altas cuando los usuarios realizan búsquedas relacionadas con el contenido, productos o servicios ofrecidos.

El proceso se basa en tres pilares fundamentales:

*   **SEO On-Page**: Optimización del contenido y la estructura interna, incluyendo el uso estratégico de palabras clave, metadatos, calidad del texto y experiencia de usuario.
*   **SEO Off-Page**: Construcción de autoridad y reputación mediante enlaces entrantes (backlinks) de otros sitios web relevantes y menciones en redes sociales.
*   **SEO Técnico**: Mejora de la infraestructura del sitio para facilitar el rastreo y la indexación por parte de las arañas de los buscadores, garantizando velocidad de carga, accesibilidad y estructura correcta.

A diferencia del **SEM** (Search Engine Marketing), que implica pagar por clics para obtener visibilidad inmediata, el SEO es una estrategia a **medio y largo plazo** que busca resultados sostenibles y gratuitos una vez alcanzada la posición deseada.