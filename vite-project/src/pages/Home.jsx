import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" />

      <div>
      {properties.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          title={p.title}
          cover={p.cover}
        />
      ))}
    </div>
    </div>
  );
}