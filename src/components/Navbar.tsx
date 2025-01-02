import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="pb-2 hover:opacity-75 lg:pb-4">
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
      <ul>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}
