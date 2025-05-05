// react
import { useEffect, useState } from "react";
// context
import { ToDoProvider } from "./components/TodoList/ToDoContext";
// components
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { ToDoList } from "./components/TodoList/ToDoList";
import { ThemeToggler } from "./components/Buttons/ThemeToggler";
import { Sorting } from "./components/Buttons/Sorting";
import { Filtering } from "./components/Buttons/Filtering";
import { ActiveSortsAndFilters } from "./components/FiltersAndSorts/ActiveSortsAndFilters";
import { SwitchToggle } from "./components/Buttons/SwitchToggle";
import { Footer } from "./components/Footer";
// styles
import "./App.css";
import { RenderingProvider } from "./components/Utils/RenderingContext";
// my app <3
function App() {
  // theme
  const [theme, changeTheme] = useState("light");
  // streak mode
  const [isStreakModeOn, changeIsStreakModeOn] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      changeTheme(storedTheme);
      storedTheme === "dark"
        ? document.querySelector("body").classList.toggle("dark")
        : document.querySelector("body").classList.remove("dark");
    } else {
      // Establecer tema por defecto
      localStorage.setItem("theme", "light");
      document.querySelector("body").classList.remove("dark");
    }
  }, [changeTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <RenderingProvider>
      <ToDoProvider>
        <div className="w-full bg-light-primary dark:bg-dark-primary">
          <main className="flex flex-col max-w-sm min-h-screen gap-5 px-5 mx-auto sm:px-0">
            <section className="flex flex-col w-full gap-5 pt-5 bg-light-primary dark:bg-dark-primary">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {isStreakModeOn
                    ? "Mi lista de habitos"
                    : "Mi lista de tareas"}
                </h1>
                <ThemeToggler
                  theme={theme}
                  changeTheme={changeTheme}
                ></ThemeToggler>
              </div>
              <div className="flex flex-col gap-4">
                <ToDoInput></ToDoInput>
                <div className="flex flex-row items-center gap-4">
                  <Sorting></Sorting>
                  <Filtering></Filtering>
                  <span className="ml-auto h-full">
                    <SwitchToggle
                      isStreakModeOn={isStreakModeOn}
                      changeIsStreakModeOn={changeIsStreakModeOn}
                    ></SwitchToggle>
                  </span>
                </div>
                <ActiveSortsAndFilters></ActiveSortsAndFilters>
              </div>
            </section>
            {!isStreakModeOn && <ToDoList></ToDoList>}
            {isStreakModeOn && (
              <section className="flex flex-col gap-5 todos">
                <h1>Bienvenido</h1>
              </section>
            )}
            <Footer></Footer>
          </main>
        </div>
      </ToDoProvider>
    </RenderingProvider>
  );
}

export default App;
