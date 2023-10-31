const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-10 py-4">
      <p className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
        Everyday Weather
      </p>
      <div className="">
        <ul className="flex">
          <li>
            <a
              href="/"
              className="leading-7 [&:not(:first-child)]:mt-6 mr-14 text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/map"
              className="leading-7 [&:not(:first-child)]:mt-6 text-white"
            >
              Map
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
