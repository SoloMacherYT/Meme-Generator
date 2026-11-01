

import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/main";

const root = createRoot(document.getElementById("root"))
root.render(
        <>
              <Header/>
              <Main/>
        </>
)