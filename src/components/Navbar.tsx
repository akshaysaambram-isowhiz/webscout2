import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pb-2 hover:opacity-75 lg:pb-4">
      <Link to="/" className="flex items-center gap-4">
        <span className="sr-only">Webscout</span>
        <img
          className="h-4 w-auto lg:h-8"
          src="/logo.svg"
          alt="Webscout logo"
          loading="lazy"
        />
        <h4 className="text-lg font-bold md:text-xl lg:text-2xl">Webscout</h4>
      </Link>

      <div className="">
        <ul className="flex items-center gap-4">
          <li className="font-bold">Panini</li>
          <li className="font-bold">Topps</li>
        </ul>
      </div>

      <div className="">
        <p className="text-base">Refresh Date on 01/01/2024 00:20</p>
      </div>
    </nav>
  );
}
