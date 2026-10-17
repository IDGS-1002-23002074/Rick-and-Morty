import PropTypes from "prop-types";

/**
 * CategoryFilter: botones para filtrar planetas por categoría.
 *
 * @param {object}   props
 * @param {string[]} props.categorias     - Categorías disponibles.
 * @param {string}   props.categoriaActiva - Categoría seleccionada.
 * @param {Function} props.onSeleccionar  - Callback al hacer clic.
 */
function CategoryFilter({ categorias, categoriaActiva, onSeleccionar }) {
  return (
    // Fragment como contenedor del componente
    <>
      <nav className="filter-bar" aria-label="Filtrar por categoría">
        <button
          className={`filter-btn ${categoriaActiva === "Todos" ? "active" : ""}`}
          onClick={() => onSeleccionar("Todos")}
        >
          Todos
        </button>

        {/* Un botón por cada categoría, sin hardcodear */}
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${categoriaActiva === cat ? "active" : ""}`}
            onClick={() => onSeleccionar(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
    </>
  );
}

CategoryFilter.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoriaActiva: PropTypes.string.isRequired,
  onSeleccionar: PropTypes.func.isRequired,
};

export default CategoryFilter;
