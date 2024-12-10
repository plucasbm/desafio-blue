import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Header Logo" className='header-logo' />
            <h1 className='title'>Desafio Bluelogic</h1>
        </header>
    );
}

export default Header;