import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Tela from "./assets/tela.png";

function App() {
  const [darkMode, setDarkMode] = useState<string>("");

  const handleDarkTheme = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };

  return (
    <div className={darkMode}>
      <main className="w-full flex max-md:flex-col dark:text-white h-screen">
        <div className="flex justify-center items-center flex-[1] max-md:hidden dark:bg-[#0A0D14] p-6">
          <div className="flex flex-col justify-center">
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

        <div className="flex justify-center items-center flex-[1] bg-[#f3f5f9] dark:bg-[#10141e] dark:border-[0] p-4 ">
          <div className="flex flex-col">
            <h3 className="font-black mb-6 text-2xl">Login</h3>
            <form className="max-w-sm">
              <label htmlFor="email" className="font-semibold text-sm">
                E-mail
              </label>
              <input
                className="bg-white border-[1px] dark:border-[0] w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3d404b] placeholder:text-sm"
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
              />

              <label htmlFor="password" className="font-semibold text-sm">
                Senha
              </label>
              <input
                className="bg-white border-[1px] dark:border-[0] w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3d404b] placeholder:text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />

              <button
                type="button"
                className="bg-[#00defe] font-bold w-full border-[0] p-3 text-[#2d272a] rounded-md my-3 cursor-pointer"
              >
                Login
              </button>

              <small>
                Não está registrado? <a href="#">Crie sua conta agora</a>
              </small>
            </form>
            <button
              className="text-gray-600 dark:text-white p-2 absolute top-6 right-6 border-[1px] rounded-md border-dashed border-gray-600 dark:border-white md:top-10 md:right-12"
              type="button"
              onClick={handleDarkTheme}
            >
              {darkMode === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
