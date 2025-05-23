import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Regístrate ahora</h1>

      {registerErrors.map((error, i) => (
        <div className="text-red-500 font-bold p-2" key={i}>
          {error}
        </div>
      ))}

      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col justify-center">
          <label htmlFor="username" className="text-lg font-semibold">
            Nombre de usuario
          </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            placeholder="Nombre de usuario"
            className="w-2xs 2xl:w-md  peer border border-gray-500 rounded-md text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          {errors.username && (
            <p className="text-red-500">El nombre de usuario es requerido</p>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="phone" className="text-lg font-semibold">
            Teléfono
          </label>
          <input
            {...register("phone", { required: true })}
            id="phone"
            type="tel"
            maxLength={10}
            placeholder="5512345678"
            className="peer border border-gray-500 rounded-md w-full text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          {errors.phone && (
            <p className="text-red-500">El número de teléfono es requerido</p>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="email" className="text-lg font-semibold">
            Correo electrónico
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="nombre@email.com"
            className="peer border border-gray-500 rounded-md w-full text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:outline-red-500"
          />
          {errors.email && (
            <p className="text-red-500">El correo electrónico es requerido</p>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="password" className="text-lg font-semibold">
            Contraseña
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            className="border border-gray-500 rounded-md w-full text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-lg bg-[#ffcd40] rounded-md p-2 cursor-pointer"
        >
          Registrarse
        </button>
      </form>

      <div className="flex gap-2 items-center">
        <span>¿Ya tienes cuenta?</span>
        <Link to="/login" className="text-[#fa6400]">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}

export default Registration;
