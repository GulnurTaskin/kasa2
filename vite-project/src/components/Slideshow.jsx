import { useState } from "react";

export default function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image.</p>;
  }

  const total = pictures.length;

  function goNext() {
    if (index === total - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function goPrev() {
    if (index === 0) {
      setIndex(total - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const showControls = total > 1;

  return (
    <div>
      <img src={pictures[index]} alt="Logement" width="600" />

      {showControls && (
        <div>
          <button onClick={goPrev}>Précédent</button>
          <button onClick={goNext}>Suivant</button>
          <p>
            {index + 1} / {total}
          </p>
        </div>
      )}
    </div>
  );
}