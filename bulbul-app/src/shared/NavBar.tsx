import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 w-screen drop-shadow absolute inset-x-0 top-0 z-10">
      <div className="flex-1">
        <Link to={"/"}>
          <span className="text-xl ml-5 font-bold text-transparent bg-clip-text bg-[#73C0FF]">{"Bul bul"}</span>
        </Link>
      </div>
    </div>
  );
};
