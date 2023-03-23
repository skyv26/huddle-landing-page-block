import EmailIcon from "../assets/icon-email.svg";
import LocationIcon from "../assets/icon-location.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import Logo from "./Logo";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00252E] px-4 pt-[139px] flex flex-col gap-10 min-[390px]:pt-44 min-[390px]:px-6">
      <div className="flex flex-col gap-7">
        <figure className="-ml-1">
          <Logo className="text-white inline-block" width="167" height="26" />
        </figure>
        <address className="flex flex-col gap-6 not-italic items-start font-open-sans text-sm text-white min-[390px]:text-base">
          <div className="flex flex-row gap-4">
            <figure className="w-[24px] pt-[0.2rem]">
              <img src={LocationIcon} className="" />
            </figure>
            <p>Aakash Verma, Freelance Software Engineer, Punjab, INDIA 🇮🇳</p>
          </div>
          <div className="flex flex-row gap-4">
            <figure className="">
              <img src={PhoneIcon} className="" />
            </figure>
            <a href="tel:+917009243305">+91-700-924-3305</a>
          </div>
          <div className="flex flex-row gap-4">
            <figure className="">
              <img src={EmailIcon} className="" />
            </figure>
            <a href="mailto:dev.aakashv@gmail.com">dev.aakashv@gmail.com</a>
          </div>
        </address>
      </div>
      <ul className="flex flex-col gap-4 font-open-sans text-sm text-white min-[390px]:text-base">
        <li>
          <ul className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-6 text-white items-center">
        <ul className="flex flex-row gap-3 items-center justify-center">
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer">
            <a href="https://www.facebook.com/skybrel">
              <FaFacebookF className="text-xl" />
            </a>
          </li>
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer">
            <a href="https://twitter.com/devaakashv">
              <FaTwitter className="text-xl" />
            </a>
          </li>
          <li className="flex flex-row items-center justify-center w-10 h-10 border-[1px] border-white rounded-full hover:text-[#FF52C1] hover:border-[#FF52C1] hover:cursor-pointer">
            <a href="https://instagram.com/skybrel">
              <FaInstagram className="text-xl" />
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-1 text-xs text-center pb-8">
          <p>
            &copy; Copyright {new Date().getFullYear()} Huddle. All rights
            reserved.
          </p>
          <p>
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
      </div>
    </footer>
  );
};

export default Footer;
