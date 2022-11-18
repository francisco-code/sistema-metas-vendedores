import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="sismeta-logo-container">
                <img src={logo} alt="Logomarca da SisMeta"/>
                <h1>Sistema de Metas</h1>
                <p>Desenvolvido por <a href="https://www.instagram.com/felip.correia/">@felip.correia</a></p>
            </div>
        </header>
    )
}

export default Header;