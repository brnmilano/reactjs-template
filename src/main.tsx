import React from "react";
import ReactDOM from "react-dom/client";
import { CommonProvider } from "./hooks/useCommon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommonProvider>
      <App />
    </CommonProvider>
  </React.StrictMode>
);
