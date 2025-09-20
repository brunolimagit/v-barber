import { useState } from "react";

import Header from "../Components/Header";
import { AppFooter } from "../Components/AppFooter";

export default function Contato() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header buttonText="Fale Conosco" nav={false}>
        <form className="flex flex-col gap-3 bg-white p-6 rounded shadow-md w-[400px] h-[400px] mt-10">
          <h2 className="flex items-center justify-center font-bold text-[#A3772D] text-[20px] border-l-2 border-l-[#A3772D] ">Contato</h2>
          <input
            type="text"
            placeholder="Seu nome"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Sua mensagem"
            className="border p-2 rounded"
          ></textarea>
          <button className="bg-[#A3772D] text-white px-4 py-2 rounded hover:bg-black transition-all mt-10 cursor-pointer">
            Enviar
          </button>
        </form>
      </Header>

      <AppFooter/>
    </div>
  );
}
