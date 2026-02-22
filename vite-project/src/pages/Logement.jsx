import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/collapse";

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);

        if (!found) {
          navigate("/error");
          return;
        }

        setLogement(found);
      })
      .catch(() => navigate("/error"));
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />
    <div className="logement-info">
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>

   <div className="logement-collapses">
  <Collapse title="Description">
    <p>{logement.description}</p>
  </Collapse>

  <Collapse title="Équipements">
    <ul>
      {logement.equipments.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Collapse>
    </div>
    </div>
  );
}