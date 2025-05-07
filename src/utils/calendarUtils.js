import { es } from "date-fns/locale";
import { startOfWeek, format, addDays, isBefore, differenceInCalendarDays } from "date-fns";

const getCurrentWeek = () => {
  const today = new Date();
  const startOfWeekDate = startOfWeek(today, { locale: es });
  //const endOfWeekDate = endOfWeek(today, { locale: es });

  let arr = [];

  for (let i = 0; i != 7; i++) {
    let e = addDays(startOfWeekDate, i, { locale: es });
    arr[i] = e;
  }

  return arr;
};

const getDayOfTheWeek = (date) => {
  return format(date, "EE", { locale: es });
};

const getDayOfTheMonth = (date) => {
  return format(date, "dd", { locale: es });
};

const analyzeLogs = (logs) => {
  const todayStr = format(new Date(), "yyyy-MM-dd");

  // Fechas hasta hoy (inclusive), ordenadas de forma descendente (para currentStreak)
  const sortedDesc = Object.keys(logs)
    .filter((date) => isBefore(new Date(date), new Date(todayStr)) || date === todayStr)
    .sort((a, b) => new Date(b) - new Date(a));

  // Calcular racha actual
  let currentStreak = 0;
  for (const date of sortedDesc) {
    if (logs[date]) {
      currentStreak++;
    } else {
      break;
    }
  }

  // Fechas ordenadas ascendentemente (para longestStreak)
  const sortedAsc = Object.keys(logs).sort((a, b) => new Date(a) - new Date(b));

  // Calcular racha más larga
  let longestStreak = 0;
  let tempStreak = 0;
  let prevDate = null;

  for (const date of sortedAsc) {
    const currentDate = new Date(date);

    if (logs[date]) {
      if (
        prevDate &&
        differenceInCalendarDays(currentDate, prevDate) === 1
      ) {
        tempStreak++;
      } else {
        tempStreak = 1;
      }
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }

    prevDate = currentDate;
  }

  // Estado de la semana actual
  const currentWeek = getCurrentWeek(); // devuelve array de Date de lunes a domingo
  const weekData = currentWeek.map((date) => {
    const dateString = format(date, "yyyy-MM-dd", { locale: es });
    return logs[dateString] || false;
  });

  return {
    currentStreak,
    longestStreak,
    weekData,
  };
};


export { getCurrentWeek, getDayOfTheWeek, getDayOfTheMonth, analyzeLogs };
