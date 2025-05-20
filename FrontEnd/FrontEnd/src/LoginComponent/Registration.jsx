import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerRequest } from "../api/auth";

function Registration() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Regístrate ahora</h1>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col justify-center">
          <label htmlFor="username" className="text-lg font-semibold">
            Nombre de usuario
          </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            placeholder="Nombre"
            className="peer border border-gray-500 rounded-md w-full text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
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
            className="peer border border-gray-500 rounded-md w-full text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
          />
          <p
            className="text-pink-600 invisible peer-invalid:peer-dirty:visible peer-invalid:peer-focus:visible"
            aria-live="assertive"
          >
            Por favor, ingresa un correo electrónico válido.
          </p>
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
