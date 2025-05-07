import { HabitCard } from "./HabitCard";
import { useContext } from "react";
import { StreakModeContext } from "./StreakModeContext";

const StreakMode = () => {
  const { streaks } = useContext(StreakModeContext);
  return (
    <div className="flex flex-col gap-5">
      {streaks.list.map((habit, key) => (
        <HabitCard habitData={habit} key={key}></HabitCard>
      ))}
    </div>
  );
};

export { StreakMode };
