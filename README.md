# CHALLENGE POKEAPI

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Deploy](#deploy)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Integración con la API](#integración-con-la-api)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Mejoras Futuras](#mejoras-futuras)

## Descripción del Proyecto

Esta aplicación es un desafío que consume la PokéAPI para mostrar una lista de 50 Pokémon. Permite buscar Pokémon por nombre y ver sus detalles, todo en una interfaz responsiva diseñada para ofrecer una experiencia de usuario óptima en dispositivos de diferentes tamaños.

## Características Principales

- Despliega una lista inicial de 50 Pokémon
- Incluye una barra de búsqueda para encontrar Pokémon por nombre
- Visualiza información detallada de cada Pokémon, como habilidades y tipos
- Diseño adaptativo y responsivo

## Requisitos

Asegúrate de contar con las siguientes herramientas instaladas antes de comenzar:

- **Node.js** (versión 14.0.0 o superior)
- **npm** (versión 6.0.0 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/giulibrumatti/pt-pokeapi.git

2. Accede al directorio del proyecto e instala las dependencias:
    ```bash
    cd pt-pokeapi
    npm install 

## Ejecución de la Aplicación

1. Inicia el servidor de desarrollo:
    ```bash
    npm run dev

1. Abre el navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.


## Estructura del Proyecto

```
pt-pokeapi/  
├── public/
│    └── /favigon.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── pokeService.tsx
│   │   │
│   │   ├── pokemons/  
│   │   │   └── [id]/
│   │   │        └── page.tsx
│   │   ├── types/
│   │   │   └── pokeTypes.ts
│   │   │ 
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   │   
│   └── components/
│       └── Conteiner.tsx
│       └── Footer.tsx
│       └── Header.tsx
│       └── PokemonBox.tsx
│       └── PokemonSearch.tsx
│       └── SearchBar.tsx
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Integración con la API

Esta aplicación utiliza la [PokéAPI](https://pokeapi.co/) para obtener información sobre los Pokémon. Se implementaron las siguientes funciones:

- **Obtener lista de Pokémon**: muestra una lista inicial de Pokémon.
- **Obtener detalles de Pokémon**: consulta información específica de cada Pokémon, incluyendo habilidades y tipos.

## Tecnologías Utilizadas

- **Next.js**: para el desarrollo de la aplicación.
- **React**: biblioteca principal de interfaz de usuario.
- **TypeScript**: para tipado seguro en el código.
- **Tailwind CSS**: para estilos responsivos y diseño adaptativo.
- **PokéAPI**: como fuente de datos para los Pokémon.

## Mejoras Futuras

Algunas ideas para mejorar la aplicación incluyen:

- **Filtrado Avanzado**: permitir al usuario filtrar Pokémon por tipo o habilidades.
- **Favoritos**: opción para que los usuarios marquen Pokémon como favoritos.
- **Cargar Más Pokémon**: agregar la funcionalidad de carga dinámica para ver más Pokémon.

## Deploy

La aplicación está desplegada en Vercel y puede ser visualizada en el siguiente enlace:

[Link deploy: Firmaway-Challenge](https://pt-pokeapi.vercel.app/)