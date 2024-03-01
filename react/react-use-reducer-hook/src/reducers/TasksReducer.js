export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "deleted": {
      const newTasks = tasks.filter((t) => {
        return t.id !== action.id;
      });
      return newTasks;
    }

    case "updated": {
      const newTasks = tasks.map((t) => {
        if (t.id === action.id) {
          return { ...t, completed: action.completed };
        }
        return t;
      });

      return newTasks;
    }
    case "added": {
      const newTasks = [action.newTask, ...tasks];
      return newTasks;
    }
    default: {
      throw new Error("action type not found");
    }
  }
}
