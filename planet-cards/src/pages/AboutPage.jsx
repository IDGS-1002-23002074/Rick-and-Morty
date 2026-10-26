import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="route-page">
      <section className="route-intro">
        <p className="eyebrow">SOBRE EL PROYECTO</p>
        <h2>Acerca de Planet Cards</h2>
        <p>Una aplicación creada con React para explorar personajes del universo de Rick and Morty.</p>
      </section>
      <section className="about-grid">
        <article className="about-card">
          <span className="about-icon">🛸</span>
          <h3>Exploración</h3>
          <p>Consulta personajes, conoce su estado, especie, género y lugar de origen.</p>
        </article>
        <article className="about-card">
          <span className="about-icon">🔎</span>
          <h3>Buscador y paginación</h3>
          <p>Encuentra personajes por nombre y navega entre las páginas de resultados de la API.</p>
        </article>
        <article className="about-card">
          <span className="about-icon">💾</span>
          <h3>Favoritos persistentes</h3>
          <p>Los IDs de tus favoritos se guardan en localStorage para conservarlos al recargar la página.</p>
        </article>
        <article className="about-card">
          <span className="about-icon">🧭</span>
          <h3>React Router</h3>
          <p>Las páginas se organizan en rutas para cambiar de sección sin recargar toda la aplicación.</p>
        </article>
      </section>
      <div className="about-actions"><Link className="route-button" to="/">Comenzar a explorar</Link></div>
    </main>
  );
}
