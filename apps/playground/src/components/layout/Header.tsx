import "../../styles/header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">🚀</span>

        <div>
          <h1>Sansu UI</h1>
          <p>Modern React Component Library</p>
        </div>
      </div>

      <div className="header__actions">
        <span className="header__version">v0.1.0</span>

        <button className="header__button">
          GitHub
        </button>
      </div>
    </header>
  );
}