import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Employees from "./Components/Employees";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      {/* <Nav />
      <Header /> */}
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
