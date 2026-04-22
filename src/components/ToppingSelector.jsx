export default function ToppingSelector({ topping, selected, setSelected }) {
  const toggle = (item) => {
    if (selected.find((i) => i.id === item.id)) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      setSelected([...selected, item]);
    }
  };

  const fmt = (p) => `Rp${p.toLocaleString("id-ID")}`;

  return (
    <div>
      <div className="config-label">
        <span className="label-icon">✨</span>
        Ekstra Topping
        <span className="config-hint">opsional</span>
      </div>
      <div className="chip-wrap">
        {topping.map((t) => (
          <div
            key={t.id}
            className={`chip ${selected.find((i) => i.id === t.id) ? "active" : ""}`}
            onClick={() => toggle(t)}
          >
            {t.name}
            <span className="chip-price">+{fmt(t.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
