<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/homepage/Header";
import Home from "./components/homepage/Home";
import Navigtion from "./components/homepage/Navigtion";
import Kalender from "./components/kalender/Kalender";
import Notiz from "./components/notiz/Notiz";
import Todo from "./components/todo/ToDo";
import Products from "./components/ProductsManagementSystem/Products";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="all">
                    <div className="navo">
                    <Navigtion />
                    </div>
                    <div className="rout">
                    <Routes >
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/kalender" element={<Kalender />}></Route>
                        <Route path="/notiz" element={<Notiz />}></Route>
                       <Route path="/products" element={<Products />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
                    </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
=======
import Products from "./components/ProductsManagementSystem/Products";
function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
>>>>>>> ef63c640feecc18b94fcd9bb3666fb895c044f53
}

export default App;
