import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-yellow-500">404</h1>
      <p className="mt-4 text-2xl text-gray-700">Page Not Found</p>
      <p className="mt-2 text-lg text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
