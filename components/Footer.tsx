import RuneSeal from "./RuneSeal";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <RuneSeal size={20} opacity={0.6} />
        <span className="footer__copy">
          © {new Date().getFullYear()} Munin Kilts · Guadalajara, México
        </span>
      </div>
      <div className="footer__redes">
        <a href="https://instagram.com/muninkilts" target="_blank" rel="noreferrer">
          @muninkilts
        </a>
        <a href="https://instagram.com/enfaldado" target="_blank" rel="noreferrer">
          @enfaldado
        </a>
      </div>
    </footer>
  );
}
