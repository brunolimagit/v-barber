import { InstagramLogoIcon, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import logo2 from "../assets/logo2.png";
import logo from "../assets/logo.png";
import pole from "../assets/pole.png";
import bg from "../assets/bg-section.jpg";
import { Link } from "react-router-dom";
import { Children } from "react";

export default function Header({
  setOpen,
  nav = true,
  buttonText = "Agendar Agora",
  children,
}) {
  return (
    <header className="w-full flex-wrap">
      <div className="flex justify-between px-25 items-center bg-black">
        <a href="" className="w-[60px] text-blue-500">
          <img src={logo2} alt="" className="text-[blue]" />
        </a>

        <a
          href="https://www.google.com/maps/place/R.+Menino+Jesus,+2096+-+Conj.+Metropolitano,+Caucaia+-+CE,+61604-140/@-3.7547595,-38.6588617,17z/data=!3m1!4b1!4m6!3m5!1s0x7c0b4ac435175a5:0x791073f0484e53de!8m2!3d-3.7547649!4d-38.6562814!16s%2Fg%2F11hhtn8gp4?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
          className="text-[#A3772D] font-bold cursor-pointer flex gap-1 text-[13px]"
          target="_blank "
        >
          <MapPin size={20} className="text-white" /> Av. das Américas 12300
          Loja 104 - BlueCenter - Fortaleza
          <img src={pole} alt="img pole" className="w-[20px]" />
        </a>
        <div className="flex gap-4">
          <a href="#">
            <InstagramLogoIcon
              size={25}
              className="text-[#A3772D] font-bold hover:scale-110 hover:text-white"
            />
          </a>

          <a href="#">
            <WhatsappLogo
              size={25}
              className="text-[#A3772D] font-bold hover:scale-110 hover:text-white"
            />
          </a>
        </div>
      </div>

      <div
        className="flex flex-col  bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Se children existir, ele substitui nav+botão */}
        {children ? (
          <div className="flex justify-center items-center mt-10">
            {children}
          </div>
        ) : (
          <>
            {nav && (
              <nav className="flex justify-center w-full">
                <ul className="flex gap-20 my-4 text-[#A3772D] font-bold cursor-pointer">
                  <li  className=" text-[#a3772d] font-bold hover:text-white transition-all duration-300 cursor-pointer hover:scale-115">
                    <Link to="/" >Início</Link>
                  </li>
                  <li  className=" text-[#a3772d] font-bold hover:text-white transition-all duration-300 cursor-pointer hover:scale-115">
                    <Link>Clube V-Barber</Link>
                  </li>
                  <li  className=" text-[#a3772d] font-bold hover:text-white transition-all duration-300 cursor-pointer hover:scale-115">
                    <Link>Quem Somos</Link>
                  </li>
                  <li  className=" text-[#a3772d] font-bold hover:text-white transition-all duration-300 cursor-pointer hover:scale-115">
                    <Link>Onde Estamos</Link>
                  </li>
                  <li  className=" text-[#a3772d] font-bold hover:text-white transition-all duration-300 cursor-pointer hover:scale-115">
                    <Link to="/contato">Contato</Link>
                  </li>
                </ul>
              </nav>
            )}

            <div className="flex flex-col items-center justify-center mt-10">
              <img src={logo} alt="logo" className="w-[400px] h-auto" />
              <button
                className="bg-transparent border-2 border-[#A3772D] text-[#a3772d] font-bold py-2 px-7 rounded ml-4 hover:bg-[#a3772d] hover:text-white transition-all duration-300 cursor-pointer hover:scale-115 "
                onClick={() => setOpen(true)}
              >
                {buttonText}
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
