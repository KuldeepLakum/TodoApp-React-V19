// Import React's StrictMode for highlighting potential problems
import { StrictMode } from "react";
// Import method to render React app
import { createRoot } from "react-dom/client";
// Import global styles
import "./index.css";
// Import the main App component
import { App } from "./App.jsx";

// Render the App component inside the root element
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
