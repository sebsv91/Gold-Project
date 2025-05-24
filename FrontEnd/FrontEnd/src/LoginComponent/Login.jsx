import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-8">
      {/* <img src="" alt="" /> */}
      <h1 className="text-4xl font-bold">Inicia sesión</h1>
      {signinErrors.map((errors, i) => (
        <div className="text-red-500 font-bold p-2" key={i}>
          {errors}
        </div>
      ))}
      <form onSubmit={onSubmit} className="flex flex-col gap-5 items-center ">
        <div className="flex flex-col gap-2 justify-center">
          <label htmlFor="email" className="2xl:text-lg font-semibold">
            Correo electrónico
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="nombre@email.com"
            className="w-2xs 2xl:w-md peer border border-gray-500 rounded-md text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          {errors.email && (
            <p className="text-red-500">El correo electrónico es requerido</p>
          )}
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex justify-between">
            <label htmlFor="password" className="2xl:text-lg font-semibold">
              Contraseña
            </label>
            <a
              href="/forgot-password"
              className="2xl:text-lg font-semibold text-[#f8b600]"
            >
              Olvidé mi contraseña
            </a>
          </div>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-2xs 2xl:w-md border border-gray-500 rounded-md text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
        </div>
        <button
          type="submit"
          className="w-2xs 2xl:w-md text-lg bg-[#ffcd40] rounded-md p-2 cursor-pointer"
        >
          Iniciar sesión
        </button>
        <div className="flex gap-2 items-center">
          <span>¿No tienes cuenta?</span>
          <Link to="/register" className="text-[#fa6400]">
            {" "}
            ¡Regístrate ahora!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
