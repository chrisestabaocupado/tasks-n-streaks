import { nanoid } from "nanoid";

const initStreaks = () => {
  const stored = localStorage.getItem("streaks");
  return {
    list: stored ? JSON.parse(stored) : [],
  };
};

const insertStreak = (streak, state) => {
  if (streak.trim() !== "") {
    let obj = { id: nanoid(), title: streak, createdAt: new Date(), logs: {} };
    return {
      list: [...state.list, obj],
    };
  }
  return state;
};

const updateStreak = (key, update, state) => {
  let updateStreaks = state.list.map((streak) =>
    streak.id === key ? Object.assign(streak, update) : streak
  );
  return {
    list: updateStreaks,
  };
};

const updateStreakLog = (key, dateStr, status, state) => {
  const updatedList = state.list.map((streak) => {
    if (streak.id === key) {
      return {
        ...streak,
        logs: {
          ...streak.logs,
          [dateStr]: status, // Marca la fecha como cumplida
        },
      };
    }
    return streak;
  });

  return {
    list: updatedList,
  };
};

const removeStreak = (key, state) => {
  const filteredStreaks = state.list.filter((streak) => streak.id !== key);
  return {
    list: filteredStreaks,
  };
};

const streaksReducer = (state, action) => {
  switch (action.type) {
    case "insert":
      return insertStreak(action.streak, state);
    case "update":
      return updateStreak(action.key, action.update, state);
    case "updateLog":
        return updateStreakLog(action.key, action.dateStr, action.status, state);
    case "remove":
      return removeStreak(action.key, state);
    default:
      return state;
  }
};

export {
  streaksReducer,
  initStreaks,
  insertStreak,
  updateStreak,
  removeStreak,
  updateStreakLog,
};
