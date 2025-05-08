import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className="text-5xl text-red-500">404 Page not found</h1>
      <Link to={"/"}>
        <button className="hover:border-black hover:border hover:text-white hover:bg-black p-4 rounded-2xl cursor-pointer border border-transparent">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
