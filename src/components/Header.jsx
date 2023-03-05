import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center absolute px-4 pt-7">
        <a href="#">
            <Logo width="104" height="16" />
        </a>
        <a href="" className="py-1 px-6 font-open-sans font-bold text-[10px] bg-white shadow-[0px_2px_7px_0px_rgba(0,0,0,0.1)] rounded-full">Try It Free</a>
    </header>
  )
}

export default Header;
