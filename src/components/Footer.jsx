import EmailIcon from '../assets/icon-email.svg';
import LocationIcon from '../assets/icon-location.svg';
import PhoneIcon from '../assets/icon-phone.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
        <Logo />
        <img src={EmailIcon} />
        <img src={LocationIcon} />
        <img src={PhoneIcon} />
    </footer>
  )
};

export default Footer;
