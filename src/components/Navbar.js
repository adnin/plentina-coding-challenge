const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-16 fixed top-0 inset-x-0 z-10">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between">
          <div>
            <a href="/" className=" text-blue-700 flex items-center py-5 px-3">
              <span className="font-bold mr-1">CC</span> Code Challenge
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
