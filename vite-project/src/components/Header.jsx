import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">À propos</Link>
      </nav>
    </header>
  );
}