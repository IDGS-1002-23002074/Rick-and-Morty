import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CharactersPage from "./pages/CharactersPage";
import FavoritesPage from "./pages/FavoritesPage";
import PlanetsPage from "./pages/PlanetsPage";
import AboutPage from "./pages/AboutPage";
import "./styles/global.css";

function NotFoundPage() {
  return (
    <main className="empty-state">
      <h2>404 · Ruta no encontrada</h2>
      <p>Esta dimensión no existe o la dirección es incorrecta.</p>
      <a className="route-button" href="/">Volver al inicio</a>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CharactersPage />} />
          <Route path="favoritos" element={<FavoritesPage />} />
          <Route path="planetas" element={<PlanetsPage />} />
          <Route path="acerca-de" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
