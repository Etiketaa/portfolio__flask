const Loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Cargando contenido"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-canvas"
    >
      <div className="flex items-center gap-3">
        <svg
          className="animate-spin h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="text-sm text-ink-muted">Cargando…</span>
      </div>
    </div>
  );
};

export default Loading;