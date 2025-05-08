import React from "react";
import Video1 from "../assets/Images/StoreImages/Video1.mp4";
import Ring from "../assets/Images/StoreImages/Ring.avif";
import Collar from "../assets/Images/StoreImages/Collar.png";
import Clock from "../assets/Images/StoreImages/Clock.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Purchase() {
  return (
    <>
      <section id="purchase" className="min-h-screen">
        <div className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            aria-label="Video de bienvenida"
          >
            <source src={Video1} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className="relative z-10 items-center justify-center h-full text-white text-center flex flex-col gap-10">
            <header>
              <h1 className="text-7xl font-extrabold">
                ¡Bienvenido a nuestra tienda en línea!
              </h1>
            </header>
            <a
              href="#store"
              className="bg-white/20 rounded-full animate-bounce p-5 flex items-center justify-center"
              aria-label="Ir a la tienda"
              role="navigation"
            >
              <FontAwesomeIcon icon={faArrowDown} className="text-6xl" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="store"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-6xl border-b-[#ffcd40] border-b-6 text-center">
              Descubre las Últimas Tendencias
            </h2>
            <p className="text-xl text-center">
              Nuevas piezas que combinan lujo y elegancia, disponibles ahora.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-3 2xl:grid-rows-1 gap-5 h-2/3 items-center justify-center">
            {/* Anillo de oro 24K */}
            <article
              className="shadow-xl rounded-4xl p-5 flex flex-col justify-between"
              role="article"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">Anillo de oro 24K</h3>
                  <p>Edición limitada</p>
                </div>
                <div className="text-2xl font-bold">
                  <p>24,999$</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={Ring}
                  alt="Anillo de oro 24K con diseño elegante, edición limitada"
                  className="object-cover rounded-xl h-100"
                />
              </div>
              <div className="flex items-center justify-center gap-5">
                <button className="bg-gray-100 text p-4 w-xs rounded-2xl hover:cursor-pointer hover:bg-[#DAEDBD]">
                  Comprar ahora
                </button>
                <button aria-label="Agregar al carrito">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="rounded-full bg-gray-100 p-4 hover:text-green-600 text-lg hover:cursor-pointer"
                  />
                </button>
                <button aria-label="Agregar a favoritos">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="rounded-full bg-gray-100 p-4 hover:text-red-500 text-lg hover:cursor-pointer"
                  />
                </button>
              </div>
            </article>

            {/* Collar de oro 24K */}
            <article
              className="shadow-xl rounded-4xl p-5 flex flex-col justify-between"
              role="article"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">Collar de oro 24K</h3>
                  <p>Edición limitada</p>
                </div>
                <div className="text-2xl font-bold">
                  <p>29,999$</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={Collar}
                  alt="Collar de oro 24K con diseño refinado, edición limitada"
                  className="object-cover rounded-xl h-100"
                />
              </div>
              <div className="flex items-center justify-center gap-5">
                <button className="bg-gray-100 text p-4 w-xs rounded-2xl hover:cursor-pointer hover:bg-[#DAEDBD]">
                  Comprar ahora
                </button>
                <button aria-label="Agregar al carrito">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="rounded-full bg-gray-100 p-4 hover:text-green-600 text-lg hover:cursor-pointer"
                  />
                </button>
                <button aria-label="Agregar a favoritos">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="rounded-full bg-gray-100 p-4 hover:text-red-500 text-lg hover:cursor-pointer"
                  />
                </button>
              </div>
            </article>

            {/* Reloj de oro y cuero 24K */}
            <article
              className="shadow-xl rounded-4xl p-5 flex flex-col justify-between"
              role="article"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">
                    Reloj de oro y cuero 24K
                  </h3>
                  <p>Edición limitada</p>
                </div>
                <div className="text-2xl font-bold">
                  <p>19,999$</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={Clock}
                  alt="Reloj de oro 24K con correa de cuero, edición limitada"
                  className="object-cover rounded-xl h-100"
                />
              </div>
              <div className="flex items-center justify-center gap-5">
                <button className="bg-gray-100 text p-4 w-xs rounded-2xl hover:cursor-pointer hover:bg-[#DAEDBD]">
                  Comprar ahora
                </button>
                <button aria-label="Agregar al carrito">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="rounded-full bg-gray-100 p-4 hover:text-green-600 text-lg hover:cursor-pointer"
                  />
                </button>
                <button aria-label="Agregar a favoritos">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="rounded-full bg-gray-100 p-4 hover:text-red-500 text-lg hover:cursor-pointer"
                  />
                </button>
              </div>
            </article>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-2xl font-bold border-b-6 border-transparent hover:border-b-[#ffcd40]"
              aria-label="Ver todos los productos"
            >
              Ver todos los productos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
