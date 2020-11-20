import React from "react";
import { Provider } from "react-redux";
import reducers from "./redux/slices";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import "./assets/styles/index.scss";
import { Home as HomePage } from "./pages";

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [...getDefaultMiddleware(), thunk],
});

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
