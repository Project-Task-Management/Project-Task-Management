import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/homepage/Header";
import Home from "./components/homepage/Home";
import Kalender from "./components/kalender/Kalender";
import Notiz from "./components/notiz/Notiz";
import Todo from "./components/todo/ToDo";
import Products from "./components/ProductsManagementSystem/Products";
import Registierung from "./components/homepage/Registierung";
import { TodoProvider } from "./context/TodoContext";
import Anmeldung from "./components/homepage/Anmeldung";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="app_header">
          <Header />
        </div>
        <div className="app_navo-rout">
          <div className="app_navo"></div>
          <div className="app_rout">
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
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
}
export default App;
