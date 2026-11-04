# COPENORTE — Rediseño bilingüe, cinco menús

## Menús
1. `index.html` — Inicio breve y presentación corporativa.
2. `sectores-que-atendemos.html` — Sector agrícola / avícola, 12 fotografías y proyectos particulares.
3. `diseno.html` — Diseño industrial: modelado 3D, chapa metálica y ensambles.
4. `manufactura-industrial.html` — Corte láser CNC, doblado, soldadura y pintura.
5. `contacto.html` — Contactos, ubicaciones y formulario.

Las páginas en inglés están en la carpeta `en/` con las mismas rutas relativas.
Los diez archivos HTML comparten `assets/css/style.css`, `assets/js/main.js` y `assets/js/images.js`.

## Iniciar
Abre esta carpeta en Visual Studio Code. Ejecuta `index.html` con Live Server.
Para la versión inglesa, pulsa **EN** arriba de cualquier página.
El menú funciona sin Internet; las imágenes remotas, mapas y correo requieren conexión.

## Fotografías
Coloca tus imágenes en `assets/img/` con los nombres de `assets/img/LEEME.txt`.
Para cambiar nombres/extensiones modifica `assets/js/images.js` en el atributo `file` correspondiente.
No cambies la extensión sin convertir el formato.

## Formulario
El formulario de `contacto.html` y `en/contacto.html` usa FormSubmit.
- Destinatario principal: `gerencia@copenorte.com`
- Copia: `ingenieria@copenorte.com` mediante `_cc` en HTML.
- Debes activar el servicio desde el correo principal al hacer el primer envío.
- Es imprescindible consentimiento de la empresa para usar FormSubmit y aviso de privacidad.
- No se ha hecho ningún envío real en estas pruebas.
- Los mensajes no salen sin conexión ni quedan almacenados localmente.

## Publicar
El proyecto no puede importarse como tema de Google Sites. Publica en Firebase Hosting u otro hosting estático y comprueba todo con una URL de prueba. Después coordina el cambio de DNS de `www.copenorte.com` sin alterar el sitio en producción antes de tiempo.

## Datos por validar
Este proyecto no ha tomado del sitio de referencia datos de capacidad, potencia de máquinas, área de trabajo, certificaciones o números de equipos. Confirma con la empresa los detalles técnicos de corte láser, doblado y pintura antes de incorporarlos.
Las fotografías originales de COPENORTE que aún usan enlaces públicos deben guardarse localmente para autonomía completa.

## Enlaces anteriores
En Firebase Hosting se agregaron redirecciones de rutas antiguas como `/corte-laser` y `/servicios` a los nuevos archivos correspondientes.

## Videos del menú Diseño

El menú Diseño usa tres MP4 en bucle y sin sonido: `assets/videos/modelado-3d.mp4`, `assets/videos/chapa-metalica.mp4` y `assets/videos/ensambles.mp4`. Añade tus videos a esa carpeta. Las imágenes antiguas siguen como respaldo y los videos aparecen cuando están listos. Tanto `diseno.html` como `en/diseno.html` usan los mismos archivos. Consulta `assets/videos/LEEME.txt`.
