const ITEMS = ["A medida", "Envíos a todo México", "2 semanas de taller"];

export default function DataBar() {
  return (
    <div className="data-bar">
      {ITEMS.map((item, i) => (
        <span key={item} style={{ display: "contents" }}>
          {i > 0 && <span className="data-bar__dot">·</span>}
          <span className="data-bar__item">{item}</span>
        </span>
      ))}
    </div>
  );
}
