export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-cyan-500/20" role="contentinfo">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 text-lg">
          © {new Date().getFullYear()} Franco Paredes • Full Stack Developer • Hecho con React + Tailwind
        </p>
      </div>
    </footer>
  );
}