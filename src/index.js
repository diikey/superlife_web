import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./screens/App/App";
import { BrowserRouter } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";
// import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
