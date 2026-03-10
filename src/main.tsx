import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";

const theme = createTheme({
  primaryColor: "brand",
  defaultRadius: "md",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  fontFamilyMonospace: "JetBrains Mono, Fira Code, monospace",
  colors: {
    brand: [
      "#e6f0fd",
      "#c0d8fa",
      "#93baf6",
      "#5f97f1",
      "#3479ed",
      "#0b63e5",
      "#0957cc",
      "#074aad",
      "#053c8c",
      "#032d6a",
    ],
    dark: [
      "#e8eaf0",
      "#9099b0",
      "#5a6278",
      "#3a4258",
      "#1e2235",
      "#161a28",
      "#11141f",
      "#0d1018",
      "#0a0d15",
      "#060810",
    ],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
);
