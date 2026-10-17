import "../styles/PlanetCard.css";

export default function CharacterCard({ character }) {
  return (
    <article className="planet character-card" style={{ "--planet-color": character.status === "Alive" ? "#58d68d" : character.status === "Dead" ? "#ff6b81" : "#aab2bd" }}>
      <img className="character-image" src={character.image} alt={`Retrato de ${character.name}`} loading="lazy" />
      <div className="character-content">
        <div className="planet__header">
          <span className="planet__emoji">🛸</span>
          <h2 className="planet__title">{character.name}</h2>
        </div>
        <span className="planet__badge">{character.status === "Alive" ? "Vivo" : character.status === "Dead" ? "Muerto" : "Desconocido"}</span>
        <p className="planet__description"><strong>Especie:</strong> {character.species}</p>
        <p className="planet__description"><strong>Género:</strong> {character.gender}</p>
        <p className="planet__description"><strong>Origen:</strong> {character.origin?.name || "Desconocido"}</p>
        <footer className="planet__footer">Personaje #{character.id} · Rick and Morty</footer>
      </div>
    </article>
  );
}
