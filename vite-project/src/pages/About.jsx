import { useState } from "react";
import Collapse from "../components/collapse";
import Banner from "../components/Banner";
import bannerAbout from "../assets/banner-about.jpg";

export default function About() {
  const [openCollapse, setOpenCollapse] = useState(null);

  function toggleCollapse(key) {
    setOpenCollapse((prev) => (prev === key ? null : key));
  }

  return (
    <div className="container">
      <Banner title="" image={bannerAbout} />

      <div className="about-collapses">
        <Collapse
          title="Fiabilité"
          isOpen={openCollapse === "fiabilite"}
          onToggle={() => toggleCollapse("fiabilite")}
        >
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>

        <Collapse
          title="Respect"
          isOpen={openCollapse === "respect"}
          onToggle={() => toggleCollapse("respect")}
        >
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>

        <Collapse
          title="Service"
          isOpen={openCollapse === "service"}
          onToggle={() => toggleCollapse("service")}
        >
          <p>La qualité du service est au cœur de nos priorités...</p>
        </Collapse>

        <Collapse
          title="Sécurité"
          isOpen={openCollapse === "securite"}
          onToggle={() => toggleCollapse("securite")}
        >
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
      </div>
    </div>
  );
}