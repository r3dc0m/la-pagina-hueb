# La página Hueb

![Hueb](assets/images/egg01.jpg)

Un proyecto web minimalista que explora cuestiones filosóficas, existenciales y del día a día a través de huevos, gatos y otras reflexiones profundas.

## Características

- Navegación SPA (Single Page Application) sin recargas
- Autenticación local (login/register/logout) con persistencia en localStorage
- API de gatos aleatorios de [TheCatAPI](https://thecatapi.com/)
- Estadísticas de usuario (gatos capturados, fecha de unión, y potencialmente visualizador de colección o estadísticas de formatos)
- Backgrounds multimedia (videos e imágenes precargados)
- Renderizado modular con componentes reutilizables
- Se adapta a móvil y adopta los temas claro/obscuro del dispositivo

## Tecnologías
```bash
Frontend:
├── Vanilla JavaScript (ES6+)
├── HTML5
├── CSS3
└── localStorage API

APIs externas:
└── TheCatAPI (imágenes de gatos aleatorios)

Herramientas:
├── Preload de assets
└── Router personalizado
```

## Instalación y Despliegue Local

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local con node.js para prevenir CORS.

### Instrucciones

Opción 1: Clonar repositorio
```bash
git clone https://github.com/r3dc0m/la-pagina-hueb.git
cd la-pagina-hueb
```

**⚠️ Importante**: Abrir directamente el archivo HTML (`file://`) **bloqueará** las peticiones fetch por CORS. Se requiere de un servidor local (node.js) para ejecutar el código.

Opción 2: Acceder a través de github pages
https://r3dc0m.github.io/la-pagina-hueb/

## Guía Rápida de Uso

1. **Navegar**: Click en iconos de la barra superior
2. **Gatos** (`¿Quién protege la Hueb?`):
   - Click "Capturar felino" → Obtén gato aleatorio
   - Las estadísticas se guardan automáticamente en localStorage
3. **Usuario** (`Usuario`):
   - **Sin cuenta**: Login o crear cuenta
   - **Con cuenta**: Ver stats + logout/delete
4. **Contenido**: Reflexiones filosóficas sobre la Hueb

### Estados de Usuario
Anónimo → Login/Register → Usuario logueado, las estadísticas actuales se integran a la cuenta

Usuario registrado → Logout/Delete → Volver a anónimo, las estadísticas locales se reinician y la cuenta persiste o se elimina


## Estructura del Proyecto
```bash
src/
├─┬ scripts/
│ ├── core/ # Orquestación global (App.js, Router.js)
│ ├─┬ components/ # UI modular (DOMmanager.js, Content.js, NavBar.js, Page.js)
│ │ └── pages/ # Contenido individual + API externa (CatPage.js, UserPage.js)
│ ├── services/ # Estado + APIs locales (authService.js, storageService.js)
│ └── data/ # Datos estáticos + constructor de bloques (data.js, utils.js)
├── styles/ # Estilos CSS
├── assets/ # Imágenes, videos, favicon
└── docs/ # Documentación adicional
```

## Páginas Disponibles

| Ruta | Icono | Contenido |
|------|-------|-----------|
| `home` | 🥚 | Reflexiones iniciales |
| `modA` | 🥔 | Valores + testimonios |
| `modB` | 🐦 | Gatos API + contador |
| `modC` | 🚜 | Cards de noticias filosóficas |
| `modD` | 🧺 | Singularidad (posible mini juego) |
| `user` | 👤 | Autenticación + estadísticas|

## Funcionalidades Técnicas

- **Router SPA**: Navegación sin recarga
- **Preload assets**: Fondos cargados al inicio
- **Componentes modulares**: `build()`, `buildBlock()`, `buildBlockGroup()`
- **Persistencia**: localStorage (usuarios, sesiones)
- **State management**: Services puros en la mayoría de funciones

## Estado del Proyecto

**Entregados**
- ✅ Router + navegación
- ✅ Autenticación completa
- ✅ API gatos + stats
- ✅ Preload optimizado

**En desarrollo activo**
- 🔄 Refactor SOLID
- 🔄 Documentación
- 🔄 Entitulado de navegación en mouse hover para escritorio
- 🔄 Adaptación del tamaño de los assets para mejor rendimiento

**Posibles integraciones**
- 🔄 Visualizador de colección en 'Usuario'
- 🔄 Mini-juego para 'Singularidad'


## Licencia

Contenido libre de derechos. Multimedia: [pixabay.com](https://pixabay.com).  

Código: MIT License © 2026.

Contribuidor: [jonathan](https://github.com/r3dc0m)

---

**_La página Hueb: donde sólo puede haber una y los gatos son sus protectores._** 🥚🐱