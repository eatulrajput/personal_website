import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-blue-600 text-center p-4">
      <img src="notfound.svg" style={{ height: '400px', width: '400px' }}
      />
      <h1 className="text-6xl font-bold mt-4">404</h1>
      <p className="text-xl mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md text-white font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
