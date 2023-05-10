import { FiSun, FiMoon } from "react-icons/fi";

type FormProps = {
  theme: string;
  handleChangeTheme: () => void;
};

const Form = ({ theme, handleChangeTheme }: FormProps) => {
  return (
    <div className="flex justify-center items-center flex-[1] bg-[#f3f5f9] dark:bg-[#10141e] dark:border-[0] px-4">
      <div className="flex flex-col">
        <h3 className="font-black mb-6 text-2xl">Login</h3>
        <form className="max-w-sm">
          <label htmlFor="email" className="font-semibold text-sm">
            E-mail
          </label>
          <input
            className="bg-white border-[1px] dark:border-[0] w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3d404b] placeholder:text-[15px]"
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password" className="font-semibold text-sm">
            Senha
          </label>
          <input
            className="bg-white border-[1px] dark:border-[0] w-full h-11 p-4 rounded-md mt-2 mb-4 dark:bg-[#3d404b] placeholder:text-[15px]"
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />

          <div className="flex justify-between my-4">
            <div className="flex items-center gap-2">
              <input
                className="checked:bg-[#00defe] w-[17px] h-[17px] cursor-pointer"
                type="checkbox"
                name="save-password"
                id="save-password"
              />
              <label
                htmlFor="save-password"
                className="text-[13px] text-[#818387] leading-4"
              >
                Lembrar senha
              </label>
            </div>
            <a
              href="#"
              className="text-[13px] text-[#121725] leading-4 font-bold"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <button
            type="button"
            className="bg-[#00defe] font-bold w-full border-[0] p-3 text-[#2d272a] rounded-md my-3 cursor-pointer shadow-lg shadow-[#00defe5b]"
          >
            Login
          </button>

          <small className="block mt-3 text-center text-sm text-[#818387]">
            Não está registrado?{" "}
            <a href="#" className="text-[#00DEFE]">
              Crie sua conta agora
            </a>
          </small>
        </form>
        <button
          className="text-gray-600 dark:text-white p-2 absolute top-6 right-6 border-[1px] rounded-md border-dashed border-gray-600 dark:border-white md:top-10 md:right-12"
          type="button"
          onClick={handleChangeTheme}
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Form;
