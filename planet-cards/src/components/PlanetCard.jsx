import PropTypes from "prop-types";
import "../styles/PlanetCard.css";

/**
 * PlanetCard: tarjeta reutilizable de un cuerpo del Sistema Solar.
 *
 * @param {object} props
 * @param {number} [props.id]        - Identificador (lo usa App como key).
 * @param {string} props.nombre      - Nombre del planeta.
 * @param {number} props.distancia   - Distancia al Sol en millones de km.
 * @param {string} props.categoria   - Categoría (ej. "Rocoso").
 * @param {string} props.descripcion - Descripción corta.
 * @param {string} props.emoji       - Emoji representativo.
 * @param {string} props.color       - Color hexadecimal del planeta.
 */
function PlanetCard({ nombre, distancia, categoria, descripcion, emoji, color }) {
  return (
    <article className="planet" style={{ "--planet-color": color }}>
      <div className="planet__header">
        <span className="planet__emoji">{emoji}</span>
        <h2 className="planet__title">{nombre}</h2>
      </div>

      <span className="planet__badge">{categoria}</span>
      <p className="planet__description">{descripcion}</p>

      {/* Fragment: agrupa el pie sin añadir un div extra */}
      <>
        <footer className="planet__footer">
          Distancia al Sol: <strong>{distancia.toLocaleString("es-MX")}</strong> millones de km
        </footer>
      </>
    </article>
  );
}

PlanetCard.propTypes = {
  id: PropTypes.number,
  nombre: PropTypes.string.isRequired,
  distancia: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PlanetCard;
