import { useToast } from "./Toast";
import { Check } from "./Icons";

export default function SelaiSelector({ selai, selected, setSelected, max }) {
  const toast = useToast();

  const toggle = (item) => {
    if (selected.find((i) => i.id === item.id)) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      if (selected.length >= max) {
        toast(`Maksimal ${max} selai untuk varian ini`, "warning");
        return;
      }
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="selector-container">
      <div className="selector-label">
        <span className="selector-title">Pilih Selai</span>
        <span className="selector-count">{selected.length} / {max}</span>
      </div>
      <div className="luxury-chips">
        {selai.map((s) => (
          <div
            key={s.id}
            className={`luxury-chip ${selected.find((i) => i.id === s.id) ? "active" : ""}`}
            onClick={() => toggle(s)}
          >
            <div className="chip-indicator">
              {selected.find((i) => i.id === s.id) && <Check size={10} strokeWidth={4} />}
            </div>
            <span className="chip-label">{s.name}</span>
            {s.price > 0 && <span className="chip-premium">+ {s.price / 1000}k</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
