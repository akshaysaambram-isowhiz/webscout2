import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="pb-2 lg:pb-4">
      <Link to="/" className="flex items-center gap-4">
        <span className="sr-only">Webscout</span>
        <img
          className="h-4 w-auto lg:h-8"
          src="/logo.svg"
          alt="Webscout logo"
          loading="lazy"
        />
        <h4 className="text-2xl font-bold">Webscout</h4>
      </Link>
    </nav>
  );
}
