import React from "react";
import { RouterProvider } from "react-router";
import { routers } from "./routes";

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={routers()} />
      </React.StrictMode>
  );
}

export default App;
