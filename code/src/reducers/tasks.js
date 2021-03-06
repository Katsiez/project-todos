import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  list: {
    name: "Task",
    tasks: [
      {
        id: 0,
        text: "Read a book",
        category: "Self Care",
        complete: false,
        createdAt: "",
      },
      {
        id: 1,
        text: "Take the dog out",
        category: "Household",
        complete: false,
        createdAt: "",
      },
      {
        id: 2,
        text: "Do laundry",
        category: "Household",
        complete: false,
        createdAt: "",
      },
      {
        id: 3,
        text: "Make dinner",
        category: "Household",
        complete: false,
        createdAt: "",
      },
      {
        id: 4,
        text: "Do some more coding",
        category: "Coding",
        complete: false,
        createdAt: "",
      },
      {
        id: 5,
        text: "Buy carrots",
        category: "Groceries",
        complete: false,
        createdAt: "",
      },
      {
        id: 6,
        text: "Wash hair",
        category: "Other",
        complete: false,
        createdAt: "",
      },
    ],
  },
};

export const tasks = createSlice({
  name: "tasks",
  initialState: initialState,

  reducers: {
    taskAdded: (state, action) => {
      const { taskInfo } = action.payload;
      state.list.tasks.push({ ...taskInfo, createdAt: moment() });
      //state.list.tasks.push({id:Date.now(), name: taskInfo, createdAt:moment()})
    },

    taskRemoved: (state, action) => {
      const { taskIndex } = action.payload;
      state.list.tasks = state.list.tasks.filter(
        (task, index) => index !== taskIndex
      );
    },

    checkTodoTask: (state, action) => {
      const { taskIndex, complete } = action.payload;
      state.list.tasks[taskIndex].complete = complete;
    },

    removeAllTasks: (state, action) => {
      state.list.tasks = [];
    },
  },
});
