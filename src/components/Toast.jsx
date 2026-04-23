import { useState, useEffect, createContext, useContext, useCallback } from "react";
import { CheckCircle2, AlertTriangle, Info } from "./Icons";

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function Toast({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const getIcon = () => {
    if (type === "success") return <CheckCircle2 size={16} className="text-success" />;
    if (type === "warning") return <AlertTriangle size={16} className="text-accent" />;
    return <Info size={16} className="text-info" />;
  };

  return (
    <div
      className="toast glass"
      style={{
        transform: visible ? "translateX(0)" : "translateX(120%)",
        opacity: visible ? 1 : 0,
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className={`toast-icon ${type}`}>{getIcon()}</div>
      <span className="fw-600">{message}</span>
    </div>
  );
}
