# Nexo Óptimo Alojamientos

Sitio estático en HTML, CSS y JavaScript. Para verlo, abre `index.html` en un navegador; también puedes servir la carpeta con cualquier hosting estático.

## Antes de publicarlo

Completa los datos de cada propiedad en `script.js`, dentro de `PROPERTY_DATA`:

- `bookingUrl`, `airbnbUrl` y `videoUrl` para cada propiedad.
- `mapUrl` para agregar un enlace a Google Maps en la ubicación de una propiedad.
- `price` y `description` con tarifas y características confirmadas.
- El Instagram oficial `@nexooptimo` ya está configurado. Agrega la URL de `facebook` para mostrar ese acceso en el pie de página.
- `SITE_CONTACT.videoUrl` para activar el botón de video general.

El correo y WhatsApp de contacto ya están configurados en `SITE_CONTACT`. Los formularios preparan un correo dirigido a ese email; el formulario de reserva también prepara un mensaje para WhatsApp. Como el sitio es estático, el visitante debe confirmar el envío en sus aplicaciones de correo y WhatsApp.

Las imágenes están en `propiedades/carabela` (Carabela), `propiedades/infinity` (Infinity), `propiedades/rocamar1` (Rocamar 1) y `propiedades/rocamar2` (Rocamar 2). Las galerías de Rocamar siguen el orden numérico de sus archivos (`1.jpeg`, `2.jpeg`, etc.); sus listas se generan en `script.js`.

> El formulario utiliza el programa de correo de quien lo envía. Para recibir consultas sin que el visitante abra su aplicación de correo, conecta un servicio de formularios o un backend antes de publicar.
