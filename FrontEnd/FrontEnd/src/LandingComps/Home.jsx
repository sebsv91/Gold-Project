import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";

const stats = [
  { title: "10K+", subtitle: "Clientes" },
  { title: "4.8", subtitle: "Reseñas" },
  { title: "24/7", subtitle: "Soporte" },
];

function Home() {
  const section2Ref = useRef(null);

  useEffect(() => {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center 2xl:flex-row py-10"
      ref={section2Ref}
    >
      <section className="grid grid-cols-1 grid-rows-4 justify-center xl:grid-cols-4 xl:grid-rows-3 w-1/2 h-screen gap-5 2xl:p-30 pt-30">
        <article className="xl:col-span-2 xl:row-span-2 rounded-3xl p-5 bg-[url('./assets/Images/Background2.jpg')] bg-cover bg-center flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl">
          <p className="font-bold text-white drop-shadow-xl">Anillos</p>
          <p className="font-bold text-xl">
            Sutileza y distinción en cada pieza.
          </p>
        </article>

        <article className="xl:col-span-2 rounded-3xl p-5 bg-[url('./assets/Images/Background.avif')] bg-cover hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl flex flex-col justify-between">
          <div className="font-bold">
            <p>Brazaletes y</p>
            <p>collares</p>
          </div>
          <div className="text-xl drop-shadow-xl text-white font-bold">
            <p>Alta calidad para</p>
            <p>cualquier ocasion.</p>
          </div>
        </article>

        <article className="xl:col-span-2 rounded-3xl p-4 bg-[url('./assets/Images/Background6.webp')] bg-cover bg-center hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl flex flex-col justify-between items-end">
          <p className="font-bold text-white text-base">
            Sofisticados con detalles únicos, precisión y funcionalidad.
          </p>
          <p className="font-bold text-white drop-shadow-xl">Relojes</p>
        </article>

        <article className="xl:col-span-4 rounded-3xl p-4 bg-[url('./assets/Images/Background7.webp')] bg-cover bg-center hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl flex items-end justify-center">
          <p className="font-extrabold text-xl text-black">
            Para <span className="text-white">brillar</span> en cualquier
            momento.
          </p>
        </article>
      </section>

      <section className="w-full 2xl:w-1/2 h-screen p-5 2xl:px-10 py-40">
        <article className="h-3/4 rounded-tl-3xl rounded-tr-3xl flex shadow-2xl">
          <header className="w-1/2 rounded-tl-3xl p-5 flex flex-col justify-between">
            <div>
              <p className="2xl:text-xl">Brilla sin límites.</p>
              <h1 className="text-4xl 2xl:text-7xl">Essencia</h1>
              <p className="text-sm 2xl:text-sm">
                Ofrecemos oro y joyería de alta calidad, con diseños exclusivos
                que reflejan lujo y distinción. Encuentra la pieza perfecta para
                cada ocasión
              </p>
            </div>
            <footer className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
              <a
                href="#store"
                className="p-3 rounded-xl hover:cursor-pointer font-bold hover:bg-[#daedbd] hover:border-none"
              >
                Productos
              </a>
              <nav className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/leomessi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-4xl" title="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </nav>
            </footer>
          </header>

          <figure className="w-1/2 rounded-tr-3xl bg-[url('./assets/Images/Background8.webp')] bg-cover bg-center" />
        </article>

        <footer className="h-1/4 flex rounded-bl-3xl rounded-br-3xl bg-[#F5F5F5] shadow-2xl">
          <section className="w-1/2 p-5 flex items-center rounded-bl-3xl">
            <p className="text-xs md:text-base text-justify">
              Clientes satisfechos, excelente calificación y atención constante
              nos respaldan. Además, con envíos nacionales rápidos y seguros, tu
              compra llegará a tiempo y sin preocupaciones.
            </p>
          </section>
          <aside className="flex items-center justify-center w-1/2 gap-2 md:gap-4 2xl:gap-6 rounded-br-3xl">
            {stats.map(({ title, subtitle }) => (
              <div className="flex flex-col text-center" key={subtitle}>
                <p className="font-bold text-xl md:text-3xl">{title}</p>
                <p>{subtitle}</p>
              </div>
            ))}
          </aside>
        </footer>
      </section>
    </section>
  );
}

export default Home;
