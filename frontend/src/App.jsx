import "./App.css";
import ChatPage from "./pages/ChatPage";
import Homepage from "./pages/HomePage";
// import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
