import logo from "../../../assets/logo.svg"; // Changed from logo.png to logo.svg
import SocialMedia from "../socialMedia/SocialMedia"; // Import SocialMedia component

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Franco Paredes
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {/* Removed navItems */}
          <SocialMedia /> {/* Added SocialMedia component */}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Franco Paredes.
        </p>
      </div>
      {/* Removed "Developed with ❤️ by ThemeWagon" */}
    </div>
  );
};

export default Footer;
