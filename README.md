# COPENORTE — Sitio web responsivo y bilingüe (ES/EN)

Este ZIP contiene **las 10 páginas HTML** (5 en español y 5 en inglés), imágenes locales, los 3 videos MP4 originales, CSS, JavaScript y configuración Firebase.

## Inicio rápido
1. Extrae el ZIP.
2. En VS Code abre **la carpeta `COPENORTE_Web_Responsive`**, no el archivo ZIP.
3. Desde `index.html` abre **Live Server**.
4. Cambia ES / EN y prueba los cinco menús.

## Fotos
Todas las fotografías originales aportadas están en `assets/img/`, conservando sus nombres .jpeg. `assets/js/images.js` apunta a sus **extensiones reales**.

- `logo.jpeg`: logo de COPENORTE.
- `manos-exp.jpeg`: fotografía de la sección «Deja tu proyecto en manos expertas».
- `diseno-ind.jpeg`: foto de diseño; `CNC.jpeg`: corte láser.
- 12 imágenes adicionales del sector agroindustrial están incluidas.
- `portada.jpg`: copia local de `manos-exp.jpeg` como portada provisional (sin enlace externo).
- `design-hero.jpg` / `laser-portada.jpg`: copias locales de fotos aportadas.
- `design-3d.jpg`, `chapa-metalica.jpg`, `ensambles.jpg`, `doblado-metal.jpg`: fotogramas obtenidos de los videos MP4 aportados. Puedes sustituirlos por fotos nuevas manteniendo el nombre.
- `pintura-industrial.jpg`: **gráfico temporal identificado como tal**, ya que el ZIP original no contiene fotografía de pintura. Sustitúyelo por una foto auténtica de COPENORTE con el mismo nombre.

## Videos
Los archivos `modelado-3d.mp4`, `chapa-metalica.mp4`, `ensambles.mp4` están en `assets/videos/`. Se reproducen en bucle, sin audio, al entrar en pantalla. Se pospone la descarga hasta que están próximos a mostrarse; esto mejora el consumo de datos en celular. El modo de movimiento reducido muestra una imagen fija.

No copies los medios dentro de `en/`: ambas versiones comparten **los mismos recursos**. Las rutas inglesas suben un nivel (`../assets/`).

## Diseño adaptable
- Escritorio: menú horizontal y secciones en columnas.
- Tablet: menú hamburguesa, cuadrículas de dos columnas cuando cabe.
- Teléfono: cuadrículas de una columna, navegación desplegable, imágenes y videos fluidos.

## Publicación
El proyecto utiliza HTML/CSS/JS estáticos. Para publicar temporalmente, usa Firebase Hosting según `firebase.json`. **No cambies los registros DNS de copenorte.com sin verificar primero en la URL de prueba.**

## Nota de formulario
FormSubmit requiere activación y prueba real con `gerencia@copenorte.com` y `ingenieria@copenorte.com`; el ZIP no activa el proveedor por sí solo. Google Maps y las fuentes web requieren conexión para verse.
