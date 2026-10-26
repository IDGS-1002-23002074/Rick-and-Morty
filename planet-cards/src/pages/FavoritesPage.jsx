import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useOutletContext();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    if (favoriteIds.length === 0) {
      setCharacters([]);
      setError("");
      setLoading(false);
      return () => { cancelled = true; };
    }

    setLoading(true);
    setError("");
    fetch(`https://rickandmortyapi.com/api/character/${favoriteIds.join(",")}`)
      .then((response) => {
        if (!response.ok) throw new Error("No se pudieron cargar los personajes favoritos.");
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setCharacters(Array.isArray(data) ? data : [data]);
      })
      .catch(() => {
        if (!cancelled) setError("No fue posible cargar los favoritos. Revisa tu conexión e inténtalo de nuevo.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [favoriteIds]);

  return (
    <main className="route-page">
      <section className="route-intro">
        <p className="eyebrow">TU COLECCIÓN</p>
        <h2>Personajes favoritos <span>★</span></h2>
        <p>Los personajes que guardas se conservan en este navegador con localStorage.</p>
      </section>

      {loading && <p className="state-message">Cargando tus favoritos…</p>}
      {error && <p className="state-message error-message" role="alert">{error}</p>}
      {!loading && !error && favoriteIds.length === 0 && (
        <section className="empty-state">
          <span aria-hidden="true">☆</span>
          <h3>Aún no tienes favoritos</h3>
          <p>Ve a personajes y presiona “Agregar a favoritos” en las tarjetas que te gusten.</p>
          <Link className="route-button" to="/">Explorar personajes</Link>
        </section>
      )}
      {!loading && !error && characters.length > 0 && (
        <section className="cards-grid" aria-label="Tus personajes favoritos">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favoriteIds.includes(character.id)}
              onToggleFavorite={() => toggleFavorite(character.id)}
            />
          ))}
        </section>
      )}
    </main>
  );
}
