import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt="Footer Logo" className='footer-logo' />
            <p className='footer-title'>Desenvolvido por: Paulo Lucas Barros Matos</p>
        </footer>
    );
}

export default Footer;