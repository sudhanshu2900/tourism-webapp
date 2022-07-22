import MainPage from "./MainPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ImageGalleryPage from "./Components/ImageGalleryPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/gallery" element={<ImageGalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
