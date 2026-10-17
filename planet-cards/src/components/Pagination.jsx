export default function Pagination({ page, totalPages, onPrev, onNext, disabled }) {
  return (
    <nav className="pagination" aria-label="Paginación de personajes">
      <button className="page-btn" onClick={onPrev} disabled={disabled || page <= 1}>← Anterior</button>
      <span className="page-indicator">Página <strong>{page}</strong> de <strong>{totalPages}</strong></span>
      <button className="page-btn" onClick={onNext} disabled={disabled || page >= totalPages}>Siguiente →</button>
    </nav>
  );
}
