import Form from "./components/Form";
import Content from "./components/Content";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={theme}>
      <main className="w-full grid grid-cols-2 dark:text-white h-screen max-md:grid-cols-1">
        <Content />
        <Form theme={theme} handleChangeTheme={changeTheme} />
      </main>
    </div>
  );
}

export default App;
