import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { favoriteIds, toggleFavorite } = useOutletContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchTerm(searchInput.trim());
      setPage(1);
    }, 350);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const { characters, totalPages, totalCharacters, loading, error } = useCharacters(page, searchTerm);

  return (
    <main>
      <section className="search-panel" aria-label="Buscar personajes">
        <label htmlFor="character-search">Busca a tu personaje favorito</label>
        <div className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            id="character-search"
            type="search"
            placeholder="Ej. Rick Sanchez, Morty..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          {searchInput && <button className="clear-btn" type="button" onClick={() => setSearchInput("")} aria-label="Limpiar búsqueda">×</button>}
        </div>
        <p className="results-count">
          {searchTerm ? `Resultados para “${searchTerm}”` : "Personajes del multiverso"}
          {!loading && !error && <span>{totalCharacters} encontrados</span>}
        </p>
      </section>

      {loading && <p className="state-message">Cargando personajes del multiverso…</p>}
      {error && <p className="state-message error-message" role="alert">{error}</p>}
      {!loading && !error && characters.length === 0 && (
        <p className="state-message">No encontramos personajes con ese nombre. Prueba con otra búsqueda.</p>
      )}
      {!loading && !error && characters.length > 0 && (
        <>
          <section className="cards-grid" aria-label="Personajes">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favoriteIds.includes(character.id)}
                onToggleFavorite={() => toggleFavorite(character.id)}
              />
            ))}
          </section>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPrev={() => setPage((current) => Math.max(1, current - 1))}
            onNext={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={loading}
          />
        </>
      )}
    </main>
  );
}
