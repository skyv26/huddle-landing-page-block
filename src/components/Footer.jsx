import EmailIcon from '../assets/icon-email.svg';
import LocationIcon from '../assets/icon-location.svg';
import PhoneIcon from '../assets/icon-phone.svg';
import Logo from './Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#00252E]'>
        <div>
            <Logo className="fill-white" />
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
        <ul>
            <li>
                <ul>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">What We Do</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>
                        <a href="#">Career</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div>
            <ul>
                <li>
                    <a href="">
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p>&copy; Copyright {new Date().getFullYear()} Huddle. All rights reserved.</p>
        </div>
        <p>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener" >Frontend Mentor</a>. 
            Coded by <a href="#">Aakash Verma ❤️</a>.
        </p>
    </footer>
  )
};

export default Footer;
