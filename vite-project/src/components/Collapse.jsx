import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggle}>{title}</button>

      {isOpen && <div>{children}</div>}
    </div>
  );
}