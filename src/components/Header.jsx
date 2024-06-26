import { lazy } from "react";
import { Link } from "react-router-dom";

export const ConnectButton = lazy(() => import("./connect-button"));
function Header() {
  return (
    <div className="w-full flex py-5">
      <div className="flex w-full mx-5 items-center justify-between border-b-green-500">
        <Link to="/">
          <div>
            <h1 className="text-xl lg:text-3xl md:text-2xl py-2 px-2 text-white">
              CORE <span className="text-green-500"> 11</span>
            </h1>
          </div>
        </Link>
        <div>
          <button className="bg-white hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded">
            <ConnectButton />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
