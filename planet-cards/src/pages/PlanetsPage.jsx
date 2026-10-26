import PlanetCard from "../components/PlanetCard";
import PLANETS from "../data/planets";

export default function PlanetsPage() {
  return (
    <main className="route-page">
      <section className="route-intro">
        <p className="eyebrow">GUÍA ESPACIAL</p>
        <h2>Planetas y mundos</h2>
        <p>Consulta información de los planetas y cuerpos celestes de nuestra colección.</p>
      </section>
      <section className="cards-grid" aria-label="Planetas">
        {PLANETS.map((planet) => <PlanetCard key={planet.id} {...planet} />)}
      </section>
    </main>
  );
}
