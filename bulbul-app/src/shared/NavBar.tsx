import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 w-screen drop-shadow absolute inset-x-0 top-0 z-10">
      <div className="flex-1">
        <Link to={"/"}>
          <span className="text-xl ml-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">{"Bul bul"}</span>
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
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
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
