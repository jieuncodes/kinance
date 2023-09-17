import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-96 justify-center items-center flex-col ">
      <img src="/images/alien.webp" alt="lost alien" className="w-24" />
      <span className="mt-12">Something went wrong.</span>
      <span
        className="text-blue-400 underline cursor-pointer"
        onClick={() => navigate(-1)}
      >
        ← Please go back.
      </span>
    </div>
  );
}
export default ErrorPage;
