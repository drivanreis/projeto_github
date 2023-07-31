import './layout.css';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="header">
        <h1 className="title">Ola eu sou um Header</h1>
        <div className="links_container">
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            Sobre
          </Link>
        </div>
      </header>
      <div className="content_container">
        <h1 className="content_title">Ola eu sou um Conteúdo</h1>
      </div>

      <footer className="footer">
        <h2 className="footer_title">Footer</h2>
      </footer>
    </>
  );
}

export default Layout;
