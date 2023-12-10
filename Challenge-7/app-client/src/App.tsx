import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Login from "./pages/Login";
import { theme } from "./config/theme";
import { CarList } from "./pages/cars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CarList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
