import { Check } from "./Icons";

export default function ToppingSelector({ topping, selected, setSelected }) {
  const toggle = (item) => {
    if (selected.find((i) => i.id === item.id)) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="selector-container">
      <div className="selector-label">
        <span className="selector-title">Ekstra Topping</span>
        <span className="selector-hint">Opsional</span>
      </div>
      <div className="luxury-chips">
        {topping.map((t) => (
          <div
            key={t.id}
            className={`luxury-chip ${selected.find((i) => i.id === t.id) ? "active" : ""}`}
            onClick={() => toggle(t)}
          >
            <div className="chip-indicator">
              {selected.find((i) => i.id === t.id) && <Check size={10} strokeWidth={4} />}
            </div>
            <span className="chip-label">{t.name}</span>
            <span className="chip-premium">+ {t.price / 1000}k</span>
          </div>
        ))}
      </div>
    </div>
  );
}
