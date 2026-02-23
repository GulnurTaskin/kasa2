import { useState } from "react";

export default function Collapse({ title, children, isOpen, onToggle }) {
  const [openLocal, setOpenLocal] = useState(false);

  const open = typeof isOpen === "boolean" ? isOpen : openLocal;

  function handleToggle() {
    if (onToggle) {
      onToggle();
    } else {
      setOpenLocal((prev) => !prev);
    }
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`collapse-icon ${open ? "open" : ""}`}>^</span>
      </div>

      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
}