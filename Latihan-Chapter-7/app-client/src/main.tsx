import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { ThemeProvider, createTheme } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.css";
// import "./styles/create-car.css";

// const theme = createTheme({
//   typography: {
//     fontFamily: "Titillium Web",
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
