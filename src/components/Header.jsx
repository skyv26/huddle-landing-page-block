import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center absolute top-0 left-[50%] translate-x-[-50%] w-full px-4 pt-7 min-[390px]:px-6 md:pt-10 lg:px-12 min-[1440px]:px-20 min-[1440px]:py-12">
      <a href="#">
        <Logo className="w-[104px] h-[16px] md:w-[170px] md:h-[25px] min-[1366px]:w-[200px] min-[1366px]:h-[32px]" />
      </a>
      <a
        href="https://devaakash.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="py-1 px-6 font-open-sans font-bold text-[10px] bg-white shadow-[0px_2px_7px_0px_rgba(0,0,0,0.1)] rounded-full md:text-xs md:px-[2.0325rem] md:py-[0.475rem] lg:shadow-[0px_3px_11px_0px_rgba(0,0,0,0.1)] min-[1366px]:text-sm min-[1366px]:px-[2.0325rem] min-[1366px]:py-[0.475rem] min-[1440px]:px-[4.0325rem] min-[1440px]:py-[0.91rem]"
      >

        Try It Free
      </a>
    </header>
  );
};

export default Header;
