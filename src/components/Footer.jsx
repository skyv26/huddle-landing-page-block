import EmailIcon from '../assets/icon-email.svg';
import LocationIcon from '../assets/icon-location.svg';
import PhoneIcon from '../assets/icon-phone.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
        <div>
            <Logo />
            <address>
                <div>
                    <img src={LocationIcon} />
                    <p>Aakash Verma, Punjab, INDIA 🇮🇳</p>
                </div>
                <div>
                    <img src={PhoneIcon} />
                    <a href="tel:+917009243305">+91-700-924-3305</a>
                </div>
                <div>
                    <img src={EmailIcon} />
                    <a href="mailto:dev.aakashv@gmail.com">dev.aakashv@gmail.com</a>
                </div>
            </address>
        </div>
        
    </footer>
  )
};

export default Footer;
