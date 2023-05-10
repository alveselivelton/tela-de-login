import Tela from "../../assets/tela.png";

const Content = () => {
  return (
    <div className="flex justify-center items-center max-md:hidden dark:bg-[#0A0D14] px-4">
      <div className="flex flex-col justify-center w-[425px]">
        <h1 className="text-4xl font-black leading-9 mb-3">
          &lt;Feito para <br />
          <strong className="text-[#00defe]">Desenvolvedores</strong>/&gt;
        </h1>
        <p className="text-[#121725 mb-6 dark:text-[#afb5c3]">
          Conecte-se e faça parte de uma comunidade construída por
          desenvolvedores e crie novas oportunidades.
        </p>
        <img src={Tela} alt="info-tela" width="521px" height="424px" />
      </div>
    </div>
  );
};

export default Content;
