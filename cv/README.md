# CV en HTML

CV de una página en A4, hecho para imprimirse a PDF desde el navegador. Sin frameworks, sin build, sin dependencias: se abre con doble clic en `index.html`.

Nació para reemplazar un generador de CV de pago: el resultado es equivalente, el texto queda seleccionable y el control es total.

## Uso

1. Abre `index.html` en Chrome (doble clic).
2. Edita los datos en `cv.data.js` y recarga.
3. Pulsa **Imprimir / Guardar PDF**.

En el diálogo de impresión de Chrome:

| Opción | Valor |
| --- | --- |
| Destino | Guardar como PDF |
| Márgenes | Ninguno |
| Gráficos de fondo | Activado |

Chrome recuerda estos ajustes, así que solo hay que hacerlo la primera vez. Sin "Gráficos de fondo" la columna izquierda sale en blanco.

## Archivos

| Archivo | Qué hace |
| --- | --- |
| `cv.data.js` | **Los datos. Es el único archivo que hay que editar.** |
| `cv.js` | Genera el HTML a partir de los datos, e iconos SVG inline. |
| `cv.css` | Maquetación, tema y reglas de impresión (`@page`, `@media print`). |
| `theme.js` | Panel de colores. Solo pantalla, no afecta al contenido. |
| `index.html` | Enlaza los cuatro archivos anteriores. |

Los datos van en un `.js` (`const CV = {...}`) y no en un `.json` a propósito: `fetch()` sobre `file://` está bloqueado por CORS, así que un JSON obligaría a levantar un servidor local cada vez que se quiera imprimir.

## Editar el contenido

Todo vive en `cv.data.js`.

**Contacto** — el campo `icono` acepta: `phone`, `mail`, `pin`, `user`, `linkedin`, `github`, `web`. `url` es opcional. Para añadir otro icono, agrega su `path` de SVG al objeto `ICONOS` de `cv.js`.

**Experiencia técnica** — se agrupa por categoría y cada fila lleva su nivel:

```js
{
  categoria: "Backend",
  filas: [
    { items: ["C#", ".NET", "API REST"], nivel: "Experto" },
    { items: ["Playwright"], ambito: "E2E", nivel: "Básico" },
  ],
}
```

Niveles usados: `Experto` · `Excelente` · `Buen manejo` · `Básico`. Es texto libre, no hay lista cerrada. `ambito` es opcional y se pinta entre paréntesis, útil cuando dos filas comparten nivel y hay que distinguirlas.

Dentro de cada categoría, ordena de mayor a menor dominio: lo primero es lo que más se lee.

**Foto** — el campo `foto` admite una URL o un archivo local. Ahora apunta a `dejeloper.com`, lo que implica tener conexión al imprimir; para trabajar sin internet, descarga la imagen a esta carpeta y pon `foto: "foto.webp"`.

La imagen se muestra completa, sin recortar. Una foto cuadrada es lo ideal: una muy vertical ocuparía demasiado alto y desplazaría los bloques de la columna.

## Colores

La barra superior permite cambiar los seis colores del CV y guarda la elección en `localStorage`. Trae cinco presets (Acero, Grafito, Bosque, Borgoña, Índigo) y un botón de restablecer.

No se imprime.

Para cambiar los valores por defecto o añadir presets, edita `PRESETS` en `theme.js`; el orden de los seis colores es el de `VARS`, en el mismo archivo.

> **Contraste:** el color *Principal* por defecto (`#7d9fb5`) con texto blanco encima queda por debajo del mínimo de accesibilidad. Se lee bien en pantalla y en una impresora decente, pero en fotocopia puede quedar lavado. Si es un problema, oscurécelo (por ejemplo `#5c8299`).

## Que quepa en una página

El diseño está pensado para una sola hoja A4 y ahora mismo va justo. Si añades contenido y se desborda, las palancas están todas en `cv.css`, de menos a más agresivas:

1. `section + section` → margen entre secciones.
2. `padding` de `.col-der`.
3. `line-height` y `font-size` de `.page`.

Para comprobar cuántas páginas salen sin abrir el diálogo de impresión:

```bash
chrome --headless --no-pdf-header-footer --print-to-pdf=out.pdf index.html
```
