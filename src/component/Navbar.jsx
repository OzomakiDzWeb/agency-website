import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggelMenue = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // scrolling... nav bar will be sticky
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.addEventListener("scroll", handelScroll);
    };
  });
  //   linkes arry
  const navItmes = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Service", path: "service" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Blog", path: "Blog" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-transparent  fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? "sticky top-0 left-0 bg-dark duration-300 transition-all ease-in"
            : "transition-all ease-in duration-300"
        }`}
      >
        {/* for larg device */}
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-3xl font bold">
            <span className="text-orange">A</span>gency
          </a>
          {/* menu itm large divice */}
          <ul className="md:flex space-x-12 hidden navitmes">
            {navItmes.map((i) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                key={i.path}
                to={i.path}
                className="block text-base text-white uppercase hover:text-orange cursor-pointer"
              >
                {i.link}
              </Link>
            ))}
          </ul>
          {/* <div className="spac-x-12 items-center">
            <button className="bg-transparent text-white p-2 border rounded-full">
              <FaBarsStaggered className="w-4 h-4 hover:text-orange" />
            </button>
          </div> */}
          {/* menu mobil */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggelMenue}
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 hover:text-orange" />
              ) : (
                <FaBarsStaggered className="w-6 h-6 hover:text-orange" />
              )}
            </button>
          </div>
        </div>
        {/* nav for small device */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-dark transition-all duration-300 ease-in ${isMenuOpen?'block fixed top-0 right-0 left-0':'hidden'}`}>
        
            {navItmes.map((i) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                key={i.path}
                to={i.path}
                className="block text-base text-white uppercase hover:text-orange cursor-pointer"
              >
                {i.link}
              </Link>
            ))}
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
