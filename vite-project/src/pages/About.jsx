import Collapse from "../components/collapse";
import Banner from "../components/Banner";
export default function About() {
 return (
    <div className="about">
      <Banner title="À propos de Kasa" />

      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
      </Collapse>

      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
      </Collapse>

       <Collapse title="Service">
        <p>La qualité du service est au cœur de nos priorités...</p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa...</p>
      </Collapse>
      
    </div>
    
  );
  
}