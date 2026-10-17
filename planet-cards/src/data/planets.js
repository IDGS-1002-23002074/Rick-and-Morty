/**
 * @file planets.js
 * @description Datos estáticos de los cuerpos del Sistema Solar que se
 *   mostrarán en las tarjetas.
 */

const PLANETS = [
  { id: 1, nombre: "Mercurio", distancia: 57.9, categoria: "Rocoso", descripcion: "El planeta más pequeño y cercano al Sol. Sus temperaturas varían de forma extrema entre el día y la noche.", emoji: "☿️", color: "#9e9e9e" },
  { id: 2, nombre: "Venus", distancia: 108.2, categoria: "Rocoso", descripcion: "El planeta más caliente por su densa atmósfera de dióxido de carbono. Gira en sentido contrario a la mayoría.", emoji: "♀️", color: "#e6a23c" },
  { id: 3, nombre: "Tierra", distancia: 149.6, categoria: "Rocoso", descripcion: "Nuestro hogar y el único mundo conocido con vida. Tiene agua líquida en su superficie.", emoji: "🌍", color: "#2e86de" },
  { id: 4, nombre: "Marte", distancia: 227.9, categoria: "Rocoso", descripcion: "El planeta rojo. Alberga el volcán más grande del Sistema Solar, el Monte Olimpo.", emoji: "🔴", color: "#d35400" },
  { id: 5, nombre: "Júpiter", distancia: 778.5, categoria: "Gaseoso", descripcion: "El planeta más grande. Su Gran Mancha Roja es una tormenta que dura siglos.", emoji: "🪐", color: "#c68b59" },
  { id: 6, nombre: "Saturno", distancia: 1433.5, categoria: "Gaseoso", descripcion: "Famoso por su espectacular sistema de anillos formados por hielo y roca.", emoji: "🪐", color: "#e0c068" },
  { id: 7, nombre: "Urano", distancia: 2872.5, categoria: "Helado", descripcion: "Gigante helado que gira inclinado de lado, con un eje casi paralelo a su órbita.", emoji: "🔵", color: "#48c9b0" },
  { id: 8, nombre: "Neptuno", distancia: 4495.1, categoria: "Helado", descripcion: "El planeta más lejano, con los vientos más rápidos del Sistema Solar.", emoji: "🌀", color: "#3b5bdb" },
  { id: 9, nombre: "Plutón", distancia: 5906.4, categoria: "Planeta enano", descripcion: "Considerado planeta hasta 2006. Hoy es el planeta enano más conocido del cinturón de Kuiper.", emoji: "⚪", color: "#a1887f" },
  { id: 10, nombre: "Ceres", distancia: 413.7, categoria: "Planeta enano", descripcion: "El mayor objeto del cinturón de asteroides y el único planeta enano del Sistema Solar interior.", emoji: "🌑", color: "#7f8c8d" },
];

export default PLANETS;
