export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="ml-4 size-5 animate-spin rounded-full border-b-2 border-t-2 border-yellow-500"></div>
      <p className="ml-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
}
