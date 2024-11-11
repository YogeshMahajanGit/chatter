import { Route } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Button variant="contained">Hello world</Button>
      <Route path="/" />
      <Route path="/chats" />
    </>
  );
}

export default App;
