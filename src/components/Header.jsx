import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center absolute w-full px-4 pt-7 min-[390px]:px-6 md:pt-10 lg:px-12 min-[1440px]:px-20 min-[1440px]:py-[77px]">
      <a href="#">
        <Logo className="w-[104px] h-[16px] md:w-[170px] md:h-[25px] min-[1366px]:w-[200px] min-[1366px]:h-[31px]" />
      </a>
      <a
        href="https://devaakash.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="py-1 px-6 font-open-sans font-bold text-[10px] bg-white shadow-[0px_2px_7px_0px_rgba(0,0,0,0.1)] rounded-full md:text-xs md:px-[2.0325rem] md:py-[0.475rem] min-[1366px]:text-sm min-[1366px]:px-[2.0325rem] min-[1366px]:py-[0.475rem] min-[1440px]:px-[4.0325rem] min-[1440px]:py-[1rem]"
      >
        Try It Free
      </a>
    </header>
  );
};

export default Header;
