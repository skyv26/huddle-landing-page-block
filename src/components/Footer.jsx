import EmailIcon from "../assets/icon-email.svg";
import LocationIcon from "../assets/icon-location.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import Logo from "./Logo";
import Store from "../store/store";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useContext } from "react";

const Footer = () => {
  const { state } = useContext(Store);

  return (
    <footer className={` ${state.mode ? 'bg-black' : 'bg-[#00252E]'} ${state.mode ? 'shadow-[0px_1px_4px_4px_rgba(255,255,255,1)]' : ''} px-4 pt-[139px] flex flex-col gap-10 min-[390px]:pt-44 min-[390px]:px-6 xl:px-12 min-[1440px]:px-28 min-[1440px]:pt-[192px] min-[1440px]:pb-[10px]`}>
      <figure className="-ml-1">
        <Logo className="text-white inline-block w-[167px] h-[26px] min-[1366px]:w-[152px] min-[1366px]:h-[24px] min-[1440px]:w-[267px] min-[1440px]:h-[38px]" />
      </figure>
      <div className="flex flex-col gap-7 md:flex-row md:relative md:gap-14 md:w-full md:justify-between min-[1440px]:justify-start min-[1440px]:gap-[120px]">
        <address className="flex flex-col gap-6 not-italic items-start font-open-sans text-sm text-white min-[390px]:text-base md:text-sm md:gap-4 md:w-[12rem] lg:w-[20rem] min-[1440px]:w-[24.75rem] min-[1440px]:px-3 min-[1440px]:text-lg min-[1440px]:gap-5">
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-4 justify-center min-[1366px]:gap-[17px]">
            <figure className="w-[24px] pt-[0.2rem] md:w-[52px] min-[1440px]:pt-[0.5rem]">
              <img src={LocationIcon} className="min-[1440px]:mr-[-1rem]" alt="aakash is open for remote opportunity" />
            </figure>
            <p className="min-[1440px]:leading-6">I am Aakash Verma, Freelance Software Engineer with 4+ years of overall IT experience from Punjab, INDIA 🇮🇳</p>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <figure className="">
              <img src={PhoneIcon} alt="contact aakash on phone" />
            </figure>
            <a href="tel:+917009243305">+91-700-924-3305</a>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <figure className="">
              <img src={EmailIcon} alt="contact aakash on email" />
            </figure>
            <a href="mailto:dev.aakashv@gmail.com">dev.aakashv@gmail.com</a>
          </div>
        </address>
      <ul className="flex flex-col gap-4 font-open-sans text-sm text-white min-[390px]:text-base md:flex-row md:text-sm md:gap-16 min-[1366px]:gap-[165px] min-[1440px]:gap-[125px] min-[1440px]:text-lg">
        <li>
          <ul className="flex flex-col gap-4 min-[1366px]:gap-3 min-[1440px]:gap-[16px]">
            <li className="hover:underline max-w-max">
              <a href="#">About Us</a>
            </li>
            <li className="hover:underline max-w-max">
              <a href="#">What We Do</a>
            </li>
            <li className="hover:underline max-w-max">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline max-w-max">
              <a href="#">Career</a>
            </li>
            <li className="hover:underline max-w-max">
              <a href="#">Blog</a>
            </li>
            <li className="hover:underline max-w-max">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex flex-col gap-6 text-white items-center md:items-start md:w-[12rem] lg:w-auto min-[1440px]:w-auto min-[1440px]:gap-28 min-[1440px]:translate-x-8">
        <ul className="flex flex-row gap-3 items-center justify-center pl-0">
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer md:w-8 md:h-8">
            <a href="https://www.facebook.com/skybrel">
              <FaFacebookF className="text-xl md:text-sm" />
            </a>
          </li>
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer md:w-8 md:h-8">
            <a href="https://twitter.com/devaakashv">
              <FaTwitter className="text-xl md:text-sm" />
            </a>
          </li>
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer md:w-8 md:h-8">
            <a href="https://instagram.com/skybrel">
              <FaInstagram className="text-xl md:text-sm" />
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-1 text-xs text-center pb-8 md:text-left md:pt-24 md:pb-14 lg:pt-14 min-[1440px]:pt-[66px]">
          <p>
            &copy; Copyright {new Date().getFullYear()} Huddle. All rights
            reserved.
          </p>
        </div>
      </div>
        <p className="text-xs bottom-3 text-white text-center absolute w-full left-0 min-[1440px]:rigt-0">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer noopener"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/skyv26">Aakash Verma ❤️</a>.
          </p>
    </div>

    </footer>
  );
};

export default Footer;
