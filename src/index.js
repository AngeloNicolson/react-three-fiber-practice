import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
