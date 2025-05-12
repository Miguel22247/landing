const Header = () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  mobileMenuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('-translate-x-full');
    } else {
      mobileMenu.classList.add('-translate-x-full');
    }
  });

  return (
    <header className="flex justify-between items-center z-50 px-8 lg:px-32 bg-black/40 top-0 w-full fixed h-16 backdrop-blur-sm">
      {/* <!-- LOGO --> */}
      <div className="w-1/4">
        <img
          src="public/images/logo.png"
          alt=""
          className="p-1 h-16 w-auto object-contain hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* <!-- DESKTOP MENU --> */}
      <nav className="hidden lg:flex w-2/4 justify-center">
        <ul className="list-none text-md p-4 lg:p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer text-white [&>li>a]:flex [&>li>a]:m-0 [&>li>a]:md:ml-8 [&>li>a]:px-0 [&>li>a]:py-4 [&>li>a]:leading-normal [&>li>a]:relative [&>li>a]:group [&>li>a]:text-white [&>li>a]:hover:text-[#FCAF17] [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a>span]:relative [&>li>a>span>span]:absolute [&>li>a>span>span]:-bottom-1 [&>li>a>span>span]:left-0 [&>li>a>span>span]:w-0 [&>li>a>span>span]:h-0.5 [&>li>a>span>span]:bg-[#FCAF17] [&>li>a>span>span]:transition-all [&>li>a>span>span]:duration-300 [&>li>a:hover>span>span]:w-full">
          <li>
            <a href="https://forum.sarp.es" target="_blank">
              <span className="relative">
                Foro
                <span></span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/sarp" target="_blank">
              <span className="relative">
                Discord
                <span></span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://ucp.sarp.es" target="_blank">
              <span className="relative">
                PCU
                <span></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- DESKTOP BUTTON --> */}
      <div className="hidden lg:flex w-1/4 justify-end">
        <a
          className="px-6 py-2 text-md font-bold rounded-lg transition-all duration-300 hover:scale-105 border-2 border-[#FCAF17] text-[#FCAF17] hover:bg-[#FCAF17] hover:text-black uppercase"
          href="https://ucp.sarp.es/auth/signup"
          target="_blank"
          id="register-button"
        >
          Regístrate
        </a>
      </div>

      {/* <!-- MOBILE MENU --> */}
      <div className="lg:hidden flex items-center">
        <a
          id="mobile-menu-button"
          className="text-white p-2 flex items-center justify-center"
        >
          <i className="pi pi-bars !text-3xl"></i>
        </a>
      </div>

      {/* <!-- MOBILE DROPDOWN MENU --> */}
      <div
        id="mobile-menu"
        className="lg:hidden fixed top-16 left-0 w-full bg-black/95 transform -translate-x-full transition-transform duration-300 ease-in-out z-50"
      >
        <ul className="flex flex-col items-center py-4">
          <li className="w-full text-center">
            <a
              href="https://forum.sarp.es"
              target="_blank"
              className="block py-4 text-white hover:text-[#FCAF17] transition-colors duration-300"
            >
              Foro
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="https://discord.gg/sarp"
              target="_blank"
              className="block py-4 text-white hover:text-[#FCAF17] transition-colors duration-300"
            >
              Discord
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="https://ucp.sarp.es"
              target="_blank"
              className="block py-4 text-white hover:text-[#FCAF17] transition-colors duration-300"
            >
              PCU
            </a>
          </li>
          <li className="w-full text-center mt-4">
            <a
              href="samp://play.sarp.es:7777"
              target="_blank"
              className="inline-block px-6 py-2 text-md font-bold rounded-lg border-2 border-[#FCAF17] text-[#FCAF17] hover:bg-[#FCAF17] hover:text-black transition-all duration-300"
            >
              JUGAR AHORA
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
