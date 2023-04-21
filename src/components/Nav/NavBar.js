import MobileNavBar from './MobileNavBar';
import NavLinks from './NavLinks';
import LinkedinIcon from '../UI/Icons/LinkedinIcon';
const NavBar = () => {
  return (
    <div className="sticky top-0">
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center p-4 bg-primary shadow-2xl">
        {/* <nav className="grid grid-cols-2 md:grid-cols-3 items-center mx-auto w-11/12 sticky top-0 bg-red-500 p-6"> */}
        <div className="text-5xl text-secondary ">
          <span className="shadow-inner select-none lg:ml-7 ml-2">I.A</span>
        </div>
        <div className="font-semibold text-xl md:flex gap-x-10 hidden justify-self-center">
          <NavLinks />
        </div>
        <LinkedinIcon
          className="justify-self-end hidden md:inline-block mr-2 lg:mr-16"
          link={'https://www.linkedin.com/in/ihab-alkhishali-128b42209/'}
        />
        <MobileNavBar />
      </nav>
      {/* <div className="pb-2 bg-primary opacity-90 shadow-2xl"></div> */}
    </div>
  );
};

export default NavBar;
