import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md z-50">
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-50">
            <label htmlFor="my-drawer" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-green-600 ">
              <li>
                <a className="text-white">Inscripciones 2024</a>
              </li>
              <li>
                <a className="text-white">Cuotas, descuentos y promociones</a>
              </li>
              <li>
                <a href="/news" className="text-white">Noticias</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Jardin Miralibres
        </a>
        <Image alt="" src="/M-removebg-preview.png" width={60} height={0} />
      </div>
      <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs bg-green-600 indicator-item"></span>
      </div>
    </button>
  </div>
    </div>
  );
};
export default Navbar;
