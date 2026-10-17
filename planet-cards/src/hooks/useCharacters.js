import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useCharacters(page, searchTerm) {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCharacters() {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({ page: String(page) });
        if (searchTerm.trim()) params.set("name", searchTerm.trim());

        const response = await fetch(`${API_URL}?${params.toString()}`, {
          signal: controller.signal,
        });

        if (response.status === 404) {
          setCharacters([]);
          setTotalPages(1);
          setTotalCharacters(0);
          return;
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        setCharacters(data.results ?? []);
        setTotalPages(data.info?.pages ?? 1);
        setTotalCharacters(data.info?.count ?? 0);
      } catch (err) {
        if (err.name !== "AbortError") setError("No se pudieron cargar los personajes. Revisa tu conexión e inténtalo de nuevo.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadCharacters();
    return () => controller.abort();
  }, [page, searchTerm]);

  return { characters, totalPages, totalCharacters, loading, error };
}
