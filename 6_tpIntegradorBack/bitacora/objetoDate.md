# Comprendiendo el objeto `Date`
En JavaScript, el objeto `Date` ofrece distintos métodos para representar una fecha en diferentes formatos. Te muestro un ejemplo con el output de cada uno.

## Ejemplo de código

javascript

```javascript
const fecha = new Date("2026-11-20T15:30:45.123Z");

console.log(fecha.toString());
console.log(fecha.toISOString());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());
console.log(fecha.toUTCString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTime());
```

## Output de cada método

Tomando como referencia la fecha `2026-11-20T15:30:45.123Z`:

| Método | Output aproximado |
| --- | --- |
| `toISOString()` | `"2026-11-20T15:30:45.123Z"` |
| `toUTCString()` | `"Fri, 20 Nov 2026 15:30:45 GMT"` |
| `toString()` | `"Fri Nov 20 2026 12:30:45 GMT-0300 (Argentina Standard Time)"` |
| `toDateString()` | `"Fri Nov 20 2026"` |
| `toTimeString()` | `"12:30:45 GMT-0300 (Argentina Standard Time)"` |
| `toLocaleString()` | `"20/11/2026, 12:30:45"` |
| `toLocaleDateString()` | `"20/11/2026"` |
| `toLocaleTimeString()` | `"12:30:45"` |
| `getTime()` | `1795188645123` |

Los métodos `toString()` y `toLocale...()` dependen de la zona horaria y configuración regional del entorno.

## Diferencia entre UTC y hora local

Fecha original (UTC)

# 15:30:45

`2026-11-20T15:30:45.123Z`

Fecha en Argentina (UTC-3)

# 12:30:45

`Fri Nov 20 2026 12:30:45 GMT-0300`

## Formatos personalizados con toLocaleString()

También podés controlar el formato:

javascript

```javascript
const fecha = new Date("2026-11-20T15:30:45.123Z");

fecha.toLocaleString("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
```

Output:

text

```text
20/11/2026, 12:30:45
```

## Resumen: ¿cuál conviene usar?

- `toISOString()`: ideal para APIs, JSON, bases de datos y almacenamiento. Siempre devuelve UTC.
- `toLocaleString()`: ideal para mostrar fechas al usuario.
- `toUTCString()`: representación legible en UTC.
- `toString()`: representación legible en la zona horaria local.
- `getTime()`: devuelve milisegundos desde Unix Epoch (1 de enero de 1970).

Importante: `JSON.stringify()` convierte automáticamente los objetos `Date` a formato ISO mediante `toJSON()`, por ejemplo:

javascript

```javascript
JSON.stringify({ fecha: new Date("2026-11-20T15:30:45.123Z") });

// '{"fecha":"2026-11-20T15:30:45.123Z"}'
```



---

# Objeto `Intl`
La especificación ECMAScript Internationalization API (ECMA-402), que introduce el objeto **Intl**, fue publicada por Ecma International en **diciembre de 2012** y completada oficialmente en esa fecha.

*   **Lanzamiento de la especificación**: **2012** (ECMA-402).
*   **Adopción generalizada**: La característica está consolidada y funciona en la mayoría de los navegadores desde **septiembre de 2017**.
*   **Disponibilidad en Node.js**: Las versiones de Node.js 0.12 y superiores incluyen estas APIs de forma nativa, aunque las versiones anteriores requerían polyfills como *Intl.js*.

El objeto **Intl** permite el formato de números, fechas, tiempos y comparación de cadenas sensible al idioma sin necesidad de librerías externas.


`Intl` es un objeto global de JavaScript que proporciona funcionalidades de internacionalización (Internationalization API).

Su objetivo es permitir que adaptes la presentación de datos a diferentes idiomas, regiones y convenciones culturales.

Por ejemplo:

- Fechas según el país.
- Horarios según la zona horaria.
- Números según la región.
- Monedas según la divisa.
- Comparación y ordenamiento de textos según reglas lingüísticas.

No necesitás instalar ninguna librería: `Intl` viene incorporado en JavaScript.

## 1. ¿Qué es Intl.DateTimeFormat?

Es una clase que permite definir cómo querés representar una fecha.

Su estructura es:

javascript

```javascript
new Intl.DateTimeFormat(localizacion, opciones).format(fecha);
```

En tu ejemplo:

javascript

```javascript
const fecha = new Date();

const fechaFormateada = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
}).format(fecha);

console.log(fechaFormateada);
```

Vamos a descomponerlo.

## 2. ¿Qué significa cada parámetro?

| Parámetro | Función |
| --- | --- |
| `"sv-SE"` | Define la configuración regional sueca. |
| `timeZone` | Establece la zona horaria de Argentina. |
| `year: "numeric"` | Año completo (2026). |
| `month: "2-digit"` | Mes con dos dígitos (11). |
| `day: "2-digit"` | Día con dos dígitos (20). |
| `hour: "2-digit"` | Hora con dos dígitos. |
| `minute: "2-digit"` | Minutos con dos dígitos. |
| `second: "2-digit"` | Segundos con dos dígitos. |
| `hourCycle: "h23"` | Utiliza el formato de 24 horas (00-23). |

### ¿Por qué usamos sv-SE?

Es el código de idioma y región correspondiente al sueco de Suecia.

Lo interesante es que su formato de fecha utiliza una estructura similar a ISO:

text

```text
2026-11-20 12:02:00
```

Por eso resulta práctico cuando queremos generar una representación de fecha ordenada como año-mes-día.

## 3. Otros ejemplos de Intl

La API `Intl` tiene varias herramientas.

Intl.NumberFormat

Permite formatear números y monedas.

javascript

```javascript
new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS"
}).format(15000);

// $ 15.000,00
```

Intl.DateTimeFormat

Permite formatear fechas.

javascript

```javascript
new Intl.DateTimeFormat("es-AR", {
    dateStyle: "full"
}).format(new Date());

// viernes, 20 de noviembre de 2026
```

Intl.RelativeTimeFormat

Permite expresar tiempos relativos.

javascript

```javascript
const formato = new Intl.RelativeTimeFormat("es", {
    numeric: "auto"
});

formato.format(-1, "day");

// ayer
```

Intl.Collator

Permite comparar y ordenar textos respetando las reglas de un idioma.

javascript

```javascript
const ordenar = new Intl.Collator("es");

["Zorro", "Árbol", "Casa"].sort(ordenar.compare);

// ["Árbol", "Casa", "Zorro"]
```

## 4. Algo importante para tu sistema de ventas

Te recomiendo separar dos responsabilidades:

Almacenar fechas:

javascript

```javascript
const fecha = new Date();

const fechaBD = fecha.toISOString();
```

Resultado:

text

```text
2026-11-20T15:02:00.000Z
```

Mostrar fechas en el ticket:

javascript

```javascript
const fechaTicket = new Intl.DateTimeFormat("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    dateStyle: "short",
    timeStyle: "medium"
}).format(fecha);
```

Resultado:

text

```text
20/11/26, 12:02:00
```

De esta manera, guardás una fecha universal en tu base de datos y la mostrás según la región correspondiente.

Concepto clave: `Intl` no modifica el objeto `Date` original. Solamente permite controlar cómo se representan sus valores.

Es una API muy útil para aplicaciones comerciales como tu sistema de ventas, especialmente cuando trabajás con monedas, fechas y horarios.