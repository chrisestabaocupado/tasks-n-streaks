// react
import { useEffect, useState, useContext } from "react";
// context
import { ToDoProvider } from "./components/TodoList/ToDoContext";
import { FilterProvider } from "./components/FiltersAndSorts/FilterContext";
import { SortProvider } from "./components/FiltersAndSorts/SortContext";
import { ToDoRenderingProvider } from "./components/TodoList/ToDoRenderingContext";
import {
  StreakModeProvider,
  StreakModeContext,
} from "./components/StreakMode/StreakModeContext";
// components
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { ToDoList } from "./components/TodoList/ToDoList";
import { ThemeToggler } from "./components/Buttons/ThemeToggler";
import { Sorting } from "./components/Buttons/Sorting";
import { Filtering } from "./components/Buttons/Filtering";
import { ActiveSortsAndFilters } from "./components/FiltersAndSorts/ActiveSortsAndFilters";
import { SwitchToggle } from "./components/Buttons/SwitchToggle";
import { Footer } from "./components/Footer";
import { StreakMode } from "./components/StreakMode/StreakMode";
// styles
import "./App.css";
// my app <3
function App() {
  const [theme, changeTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      changeTheme(storedTheme);
      storedTheme === "dark"
        ? document.querySelector("body").classList.toggle("dark")
        : document.querySelector("body").classList.remove("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("body").classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ToDoProvider>
      <StreakModeProvider>
        <SortProvider>
          <FilterProvider>
            <AppContent theme={theme} changeTheme={changeTheme} />
          </FilterProvider>
        </SortProvider>
      </StreakModeProvider>
    </ToDoProvider>
  );
}

function AppContent({ theme, changeTheme }) {
  const { isStreakModeOn } = useContext(StreakModeContext);

  return (
    <div className="w-full bg-light-primary dark:bg-dark-primary">
      <main className="flex flex-col max-w-sm min-h-screen gap-5 px-5 mx-auto sm:px-0">
        <section className="flex flex-col w-full gap-5 pt-5 bg-light-primary dark:bg-dark-primary">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
              {isStreakModeOn ? "Mi lista de habitos" : "Mi lista de tareas"}
            </h1>
            <ThemeToggler theme={theme} changeTheme={changeTheme} />
          </div>
          <div className="flex flex-col gap-4">
            <ToDoInput />
            <div className="flex flex-row items-center gap-4">
              <Filtering />
              <Sorting />
              <span className="ml-auto h-full">
                <SwitchToggle />
              </span>
            </div>
            <ActiveSortsAndFilters />
          </div>
        </section>
        {!isStreakModeOn && (
          <ToDoRenderingProvider>
            <ToDoList />
          </ToDoRenderingProvider>
        )}
        {isStreakModeOn && <StreakMode />}
        <Footer />
      </main>
    </div>
  );
}

export default App;