import caveira from "../assets/caveira.jpg"
export default function QuemSomos({setOpen}) {
  return (
    <>
    <div className="p-10 bg-black pl-20  bg-cover bg-center" style={{ backgroundImage: `url(${caveira})` }} >
      <h1 className="text-[30px] font-bold text-[#A3772D] my-3 ">Quem Somos</h1>
      <div className="flex flex-col w-[50%] gap-4 text-white ">
        <p>
          E aí, beleza? Se você está procurando mais do que um simples corte de
          cabelo, acabou de achar o seu lugar!
        </p>
        <p>
          Bem-vindo à <span className="text-[#A3772D]">V Barbershop</span>, onde resenha, bom papo e
          risadas são tão essenciais quanto um fade bem feito.
        </p>
        <p>
          Nossos barbeiros? Esses caras são praticamente mágicos dos cabelos.
          Eles não só cortam, estilizam. São verdadeiros arquitetos capilares.
          Aqui, esqueça o tratamento convencional. Somos tudo, menos isso.
        </p>
        <p>
          Na <span className="text-[#A3772D]">V</span>, cliente não é só cliente, é amigo. E amigo? Pode se
          sentir em casa, porque é exatamente o que somos: uma grande família.
        </p>
        <p>
          A gente nasceu em outubro de 2022, com um sonho na cabeça: ser
          referência. E, olha, tá só começando. Vamo pra cima, porque o caminho
          é longo, mas a diversão é garantida. Bora fazer história juntos?
        </p>
      </div>
      <button
        className="bg-transparent border-2 border-[#A3772D] text-[#a3772d] font-bold py-2 px-7 rounded my-4 hover:bg-[#a3772d] hover:text-white transition-all duration-300 cursor-pointer hover:scale-115 "
        onClick={() => setOpen(true)}
      >AGENDAR AGORA</button>
    </div>
    <div className="bg-[#A3772D] h-1"></div>
    </>
  );
}
