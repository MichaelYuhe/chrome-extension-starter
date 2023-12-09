import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const Popup = () => {
  return <div className="p-6 min-w-[24rem]"></div>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
