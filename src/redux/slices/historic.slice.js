import { createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";

const historicSlice = createSlice({
  name: "historic",
  initialState: { historic: [] },
  reducers: {
    setHistoric: {
      reducer(state, action) {
        state.historic = action.payload.historic;
      },

      prepare(historic) {
        return { payload: { historic } };
      },
    },

    addHistoric: {
      reducer(state, action) {
        const list = [...action.payload.list];
        list.push(action.payload.historic);
        localforage.setItem("historic", list);
        state.historic = list;
      },

      prepare(historic, list) {
        return { payload: { historic, list } };
      },
    },

    removeHistoric: {
      reducer(state, action) {
        const index = state.historic.findIndex(
          (item) => item.id === action.payload.historic.id
        );
        if (index !== -1) {
          state.historic.splice(index, 1);
          localforage.setItem("historic", state.historic);
        }
      },

      prepare({ historic }) {
        return { payload: { historic } };
      },
    },
  },
});

export const {
  setHistoric,
  addHistoric,
  removeHistoric,
} = historicSlice.actions;

export default historicSlice.reducer;
