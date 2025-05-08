function Products() {
  return (
    <>
      <section
        id="products"
        className="min-h-screen p-35 flex flex-col items-center"
      >
        <div className="flex flex-col h-screen w-full p-20 items-center">
          <div>
            <h1 className="text-6xl border-b-[#ffcd40] border-b-6 text-center">
              ¡Sobre nuestros productos!
            </h1>
          </div>
          <div className="flex h-screen w-full gap-5 items-center justify-center">
            <div
              className="shadow-2xl group h-1/2 w-1/4 transition-all duration-300 transform hover:w-1/2 rounded-4xl p-5 flex flex-col-reverse justify-between hover:cursor-pointer bg-[url('./assets/Images/ImagesProductInfo/Background9.webp')] bg-cover bg-left"
              aria-label="Oro y plata - Materiales"
            >
              <h1 className="text-4xl font-semibold">Oro y plata</h1>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs bg-white/1 p-3 rounded-lg">
                <h2 className="text-2xl font-extrabold">Materiales</h2>
                <p className="text-white text-2xl">
                  Nuestros productos están hechos con los mejores materiales,
                  combinando oro y plata de alta calidad, lo que garantiza
                  durabilidad, brillo y un acabado exquisito.
                </p>
              </div>
            </div>

            <div
              className="shadow-2xl group h-1/2 w-1/4 transition-all duration-300 transform hover:w-1/2 rounded-4xl p-5 flex flex-col justify-between hover:cursor-pointer bg-[url('./assets/Images/ImagesProductInfo/Background10.webp')] bg-cover"
              aria-label="Alta Durabilidad - Resistencia al Desgaste"
            >
              <h1 className="text-4xl font-semibold">Alta Durabilidad</h1>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs bg-white/1 p-3 rounded-lg">
                <h2 className="text-2xl font-extrabold">
                  Resistencia al Desgaste
                </h2>
                <p className="text-white text-2xl">
                  Cada pieza está diseñada para soportar el paso del tiempo. Los
                  metales preciosos utilizados son tratados para ser altamente
                  resistentes a la oxidación, corrosión y rayaduras.
                </p>
              </div>
            </div>

            <div
              className="shadow-2xl group h-1/2 w-1/4 transition-all duration-300 transform hover:w-1/2 rounded-4xl p-5 flex flex-col-reverse justify-between hover:cursor-pointer bg-[url('./assets/Images/ImagesProductInfo/Background11.webp')] bg-cover bg-left"
              aria-label="Garantía de Calidad - Control Riguroso"
            >
              <h1 className="text-4xl font-semibold">Garantía de Calidad</h1>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs bg-white/1 p-3 rounded-lg">
                <h2 className="text-2xl font-extrabold">Control Riguroso</h2>
                <p className="text-white text-2xl">
                  Todas nuestras joyas pasan por un estricto control de calidad
                  antes de ser enviadas. Nos aseguramos de que cada pieza cumpla
                  con los más altos estándares de durabilidad y belleza,
                  garantizando tu satisfacción.
                </p>
              </div>
            </div>

            <div
              className="shadow-2xl group h-1/2 w-1/4 transition-all duration-300 transform hover:w-1/2 rounded-4xl p-5 flex flex-col justify-between hover:cursor-pointer bg-[url('./assets/Images/ImagesProductInfo/Background12.webp')] bg-cover bg-left"
              aria-label="Para Todos los Gustos - Diversidad de Estilos"
            >
              <h1 className="text-4xl font-semibold">Para Todos los Gustos</h1>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs bg-white/1 p-3 rounded-lg">
                <h2 className="text-2xl font-extrabold">
                  Diversidad de Estilos
                </h2>
                <p className="text-white text-2xl">
                  Nuestra colección ofrece una amplia variedad de estilos, desde
                  lo más clásico hasta lo más moderno, asegurando que cada
                  cliente encuentre la joya que se adapta perfectamente a su
                  gusto y personalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
