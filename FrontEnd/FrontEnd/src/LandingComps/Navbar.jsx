import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCircleUser,
  faHeart,
  faCartShopping,
  faGem,
  faBars,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <>
      <div className="sticky top-0 bg-white z-50">
        <div className="flex items-center p-5">
          <div className="flex flex-1 items-center">
            <button className="hover:cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="text-xl" />{" "}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <a href="#home">
              <FontAwesomeIcon
                icon={faGem}
                className="text-2xl text-[#fed42d]"
              />{" "}
            </a>
            <div></div>
          </div>
          <div className="flex flex-1 gap-2 items-center justify-end ">
            <button className="hover:cursor-pointer p-1">
              <FontAwesomeIcon
                icon={faHeart}
                className=" rounded-full p-2 hover:text-[#eda14e] text-lg"
              />{" "}
            </button>
            <button className="hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faCartShopping}
                className=" rounded-full p-2 hover:text-[#eda14e] text-lg "
              />{" "}
            </button>

            {isAuthenticated ? (
              <>
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="rounded-full p-2 hover:text-[#eda14e] text-xl"
                  />
                </Link>
                <p className="font-bold animate-bounce text-center hidden lg:flex">
                  ¡Bienvenido {user.username}!
                </p>
              </>
            ) : (
              <>
                <Link to="/login">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="rounded-full p-2 hover:text-[#eda14e] text-xl"
                  />
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <nav>
            <ul className="flex justify-center text-center gap-15">
              <li className="border-b-3 border-transparent hover:border-[#ffcd40] hover:scale-110 transition duration-200 ease-in-out ">
                <a href="#home">Inicio</a>
              </li>
              <li className="border-b-3 border-transparent hover:border-b-[#ffcd40] hover:scale-120 transition duration-100 ease-in-out ">
                <a href="#products">Productos</a>
              </li>
              <li className="border-b-3 border-transparent hover:border-b-[#ffcd40] hover:scale-120 transition duration-100 ease-in-out ">
                <a href="#purchase">Compra</a>
              </li>
              <li className="border-b-3 border-transparent hover:border-b-[#ffcd40] hover:scale-120 transition duration-100 ease-in-out ">
                <a href="#about">Nosotros</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
