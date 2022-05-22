import MainPage from "./MainPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
