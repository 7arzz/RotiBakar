import { useToast } from "./Toast";

export default function SelaiSelector({ selai, selected, setSelected, max }) {
  const toast = useToast();

  const toggle = (item) => {
    if (selected.find((i) => i.id === item.id)) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      if (selected.length >= max) {
        toast(`Maksimal ${max} selai untuk roti ini`, "warning");
        return;
      }
      setSelected([...selected, item]);
    }
  };

  return (
    <div>
      <div className="config-label">
        <span className="label-icon">🍫</span>
        Pilih Selai
        <span className="config-hint">
          {selected.length}/{max}
        </span>
      </div>
      <div className="chip-wrap">
        {selai.map((s) => (
          <div
            key={s.id}
            className={`chip ${selected.find((i) => i.id === s.id) ? "active" : ""}`}
            onClick={() => toggle(s)}
          >
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
