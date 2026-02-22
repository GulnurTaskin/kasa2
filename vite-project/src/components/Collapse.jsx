import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <button className="collapse-header"  onClick={toggle}>{title}</button>

       {isOpen && (
      <div className="collapse-content">
        {children}
      </div>
    )}
    </div>
  );
}