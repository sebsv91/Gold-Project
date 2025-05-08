import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <section className=" h-100">
        <div className="flex flex-col lg:flex-row h-full p-10">
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-5xl">Dorado elite</h2>
            <div className="border-b-[#ffcd40] border-b-6">
              <p>Copyright 2025, CDMX.</p>
              <p>Terminos y condiciones.</p>
            </div>
          </div>
          <div className="flex-1 >">
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="font-bold text-2xl border-b-[#ffcd40] border-b-6">
                Productos
              </h3>
              <a href="">Materiales</a>
              <a href="">Envios</a>
              <a href="">Precios</a>
            </div>
          </div>
          <div className="flex-1 >">
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="font-bold text-2xl border-b-[#ffcd40] border-b-6">
                Sobre nosotros
              </h3>
              <a href="">Sobre Dorado Elite</a>
              <a href="">Contactanos</a>
              <a href="">Sucursales</a>
            </div>
          </div>
          <div className="flex-1 >">
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="font-bold text-2xl border-b-[#ffcd40] border-b-6">
                Contactanos
              </h3>
              <div>
                <p>¿Preguntas o comentarios?</p>
                <p>¡Nos encataría oir tu opinión!</p>
              </div>

              <div className="flex text-3xl gap-5">
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
