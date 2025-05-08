function AboutUs() {
  return (
    <>
      <section id="about" className="h-screen p-5 2xl:p-35">
        <div className=" flex 2xl:gap-5 h-full items-center">
          <div className="flex-1 h-full bg-[url('./assets/Images/AboutUs/AboutUs.jpeg')] bg-cover bg-center rounded-tl-2xl rounded-bl-3xl"></div>
          <div className="flex-1 h-full flex flex-col items-center p-5 gap-5 text-justify justify-center">
            <h2 className="text-5xl font-bold">Historia de la empresa</h2>
            <p className="text-sm 2xl:text-xl">
              En Dorado Elite, creemos en el valor del oro como una inversión
              segura y un símbolo de elegancia. Desde nuestros inicios, nos
              hemos dedicado a ofrecer piezas de alta calidad y un servicio
              confiable a nuestros clientes.
            </p>
            <p className="text-sm 2xl:text-xl">
              Nuestro compromiso con la transparencia y la excelencia nos ha
              permitido construir una relación de confianza con quienes buscan
              invertir en metales preciosos o adquirir joyas de gran valor.
              Trabajamos con proveedores certificados y garantizamos la
              autenticidad de cada pieza, asegurando siempre los más altos
              estándares de calidad.
            </p>
            <p className="text-sm 2xl:text-xl">
              Hoy, seguimos creciendo con la misma misión: brindar a nuestros
              clientes una experiencia de compra segura, accesible y respaldada
              por nuestra experiencia en el mercado.
            </p>
            <p className="text-sm 2xl:text-xl font-bold">
              Bienvenido a Dorado Elite, donde el oro es más que un metal, es
              una inversión en el futuro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
