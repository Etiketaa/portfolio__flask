import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className={`btn-brutal btn-ghost w-10 h-10 p-0 ${className}`}
      style={{ borderRadius: 'var(--radius-none)' }}
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun size={18} aria-hidden="true" />
        ) : (
          <Moon size={18} aria-hidden="true" />
        )
      ) : (
        <span className="w-[18px] h-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}