<<<<<<< HEAD
import Notiz from "./components/notiz/Notiz.jsx";

function App() {
  return (
    <div className="App">
      <Notiz />
    </div>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/homepage/Header";
import Home from "./components/homepage/Home";
import Navigtion from "./components/homepage/Navigtion";
import Kalender from "./components/kalender/Kalender";
import Notiz from "./components/notiz/Notiz";
import Todo from "./components/todo/ToDo";
import Products from "./components/ProductsManagementSystem/Products";
import Registierung from "./components/homepage/Registierung";
import { TodoProvider } from "./context/TodoContext";
import Anmeldung from "./components/homepage/Anmeldung";

function App() {
  return (
    <TodoProvider>
      <div className="app_grid">
        <BrowserRouter>
          <div className="app_header">
          <Header />
          </div>
            <div className="navo">
              <Navigtion />
            </div>
            <div className="rout">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/kalender" element={<Kalender />}></Route>
                <Route path="/notiz" element={<Notiz />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
                <Route path="/registierung" element={<Registierung />}></Route>
                <Route path="/anmeldung" element={<Anmeldung />}></Route>
              </Routes>
          </div>
        </BrowserRouter>
      </div>
    </TodoProvider>
>>>>>>> dev
  );
}
export default App;
