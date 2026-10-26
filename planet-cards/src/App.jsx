import { NavLink, Outlet } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles/characters.css";
import "./styles/routes.css";

function App() {
  const [favoriteIds, setFavoriteIds] = useLocalStorage("planet-cards-favorites", []);

  function toggleFavorite(characterId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(characterId)
        ? currentIds.filter((id) => id !== characterId)
        : [...currentIds, characterId]
    );
  }

  return (
    <div className="app-container">
      <header className="app-header site-header">
        <p className="eyebrow">UNIVERSO MULTIVERSAL</p>
        <h1>Rick <span>&amp;</span> Morty</h1>
        <p>Explora personajes de todas las dimensiones.</p>
        <p className="favorites-summary" aria-live="polite">
          ★ {favoriteIds.length} {favoriteIds.length === 1 ? "favorito guardado" : "favoritos guardados"}
        </p>
      </header>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Personajes</NavLink>
        <NavLink to="/favoritos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>★ Favoritos</NavLink>
        <NavLink to="/planetas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Planetas</NavLink>
        <NavLink to="/acerca-de" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Acerca de</NavLink>
      </nav>

      <Outlet context={{ favoriteIds, toggleFavorite }} />

      <footer className="app-footer">Datos de personajes obtenidos de la API pública de Rick and Morty</footer>
    </div>
  );
}

export default App;
