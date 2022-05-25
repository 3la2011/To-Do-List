import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  isSelected: false,
  selectedTaskId: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    setTasks: (state, action) => {
      return {
        tasks: action.payload,
        isSelected: false,
        selectedTaskId: "",
      };
    },
    selectTask: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isSelected: true,
        selectedTaskId: action.payload,
      };
    },
    unselectTask: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isSelected: false,
        selectedTaskId: "",
      };
    },
  },
});

export const { setTasks, selectTask, unselectTask } = tasksSlice.actions;

export default tasksSlice.reducer;
