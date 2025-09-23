import { WhatsappLogo } from "@phosphor-icons/react";

export default function Valores() {
  return (
    <>
      <div className="bg-[#A3772D] h-1"></div>

      {/* Ícone fixo do WhatsApp */}
      <a className="fixed bottom-5 right-5 text-white bg-green-600 opacity-20 hover:opacity-100 rounded-[50px] p-1 z-50 transition-all duration-300 cursor-pointer hover:scale-115" href="https://wa.me/85988307887" target="_blank">
        <WhatsappLogo size={60} />
      </a>

      <div className="flex justify-center gap-5 p-10 text-center bg-black relative z-10">
      
        <div className="border-1 border-[#A3772D] rounded-[10px] p-8 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-white ">
          <h2 className="text-[#A3772D] text-[30px]">Cabelo e Barba</h2>
          <p className="my-5 text-white">
            R$<span className="text-[40px]">200</span>00
          </p>
          <div className="flex flex-col gap-4 text-white">
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Corte o cabelo quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Faça a barba quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Descontos em produtos e serviços extras
            </p>
          </div>
        </div>

     
        <div className="border-1 border-[#A3772D] rounded-[10px] p-8 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-white">
          <h2 className="text-[#A3772D] text-[30px]">Cabelo e Barba</h2>
          <p className="my-5 text-white">
            R$<span className="text-[40px]">200</span>00
          </p>
          <div className="flex flex-col gap-4 text-white">
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Corte o cabelo quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Faça a barba quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Descontos em produtos e serviços extras
            </p>
          </div>
        </div>
        <div className="border-1 border-[#A3772D] rounded-[10px] p-8 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-white">
          <h2 className="text-[#A3772D] text-[30px]">Cabelo e Barba</h2>
          <p className="my-5 text-white">
            R$<span className="text-[40px]">200</span>00
          </p>
          <div className="flex flex-col gap-4 text-white">
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Corte o cabelo quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Faça a barba quantas vezes quiser
            </p>
            <p className="border-b-2 border-[#A3772D] w-[90%] mx-auto">
              Descontos em produtos e serviços extras
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#A3772D] h-1"></div>
    </>
  );
}
