import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      "azure-radiance": [
        "#edfaff",
        "#d6f3ff",
        "#b5ebff",
        "#83e1ff",
        "#48ceff",
        "#1eb0ff",
        "#0693ff",
        "#007cf9",
        "#0861c5",
        "#0d549b",
        "#0e335d",
      ],
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="*" element ={<HomePage />}/>
      </Routes>
       
      </BrowserRouter>
    </MantineProvider>
  );
}
