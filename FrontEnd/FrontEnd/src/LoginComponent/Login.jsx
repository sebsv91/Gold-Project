function Login() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-8">
      <img src="" alt="" />
      <h1 className="text-4xl font-bold">Inicia sesión</h1>
      <div className="flex flex-col gap-2 justify-center">
        <label htmlFor="email" className="text-lg font-semibold">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="nombre@email.com"
          className="peer border border-gray-500 rounded-md w-130 text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
        />
        <p
          className="text-pink-600 invisible peer-invalid:peer-dirty:visible peer-invalid:peer-focus:visible"
          aria-live="assertive"
        >
          Por favor ingresa un correo electrónico válido.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex justify-between">
          <label htmlFor="password" className="text-lg font-semibold">
            Contraseña
          </label>
          <a
            href="/forgot-password"
            className="text-lg font-semibold text-[#f8b600]"
          >
            Olvidé mi contraseña
          </a>
        </div>
        <input
          id="password"
          type="password"
          className="border border-gray-500 rounded-md w-130 text-lg focus:border-[#ffcd40] focus:outline focus:outline-[#ffcd40] p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
        />
      </div>
      <button
        type="submit"
        className="w-130 text-lg bg-[#ffcd40] rounded-md p-2 cursor-pointer"
      >
        Iniciar sesión
      </button>
      <div className="flex gap-2 items-center">
        <span>¿No tienes cuenta?</span>
        <a href="/register" className="text-[#fa6400]">
          ¡Regístrate ahora!
        </a>
      </div>
    </div>
  );
}

export default Login;
