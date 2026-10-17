# Planet Cards — Rick and Morty

Proyecto React + Vite que integra el hook de consulta, búsqueda y paginación del proyecto `hooks` con el diseño de tarjetas de `planet-cards`.

## Funcionalidades
- Consulta personajes desde la API pública de Rick and Morty.
- Hook personalizado `useCharacters(page, searchTerm)` para manejar peticiones, carga, errores y resultados.
- Buscador por nombre con espera breve al escribir.
- Paginación con botones anterior/siguiente.
- Diseño adaptable a escritorio y móvil.

## Ejecutar
Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Para comprobar la compilación de producción:

```bash
npm run build
npm run preview
```

La aplicación necesita conexión a internet para consultar `https://rickandmortyapi.com/api/character`.
