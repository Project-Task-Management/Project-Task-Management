import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
<<<<<<< HEAD
import Header from "./components/homepage/Header";
import Home from "./components/homepage/Home";
import Navigtion from "./components/homepage/Navigtion";
import Kalender from "./components/kalender/Kalender";
import Notiz from "./components/notiz/Notiz";
import Todo from "./components/todo/ToDo";
import Products from "./components/ProductsManagementSystem/Products";
import Registierung from "./components/homepage/Registierung";
import { TodoProvider } from "./context/TodoContext";
=======
import Header from "./components/homepage/Header.jsx";
import Home from "./components/homepage/Home.jsx";
import Navigtion from "./components/homepage/Navigtion.jsx";
import Kalender from "./components/kalender/Kalender.jsx";
import Notiz from "./components/notiz/Notiz.jsx";
import Todo from "./components/todo/ToDo.jsx";
import Products from "./components/ProductsManagementSystem/Products.jsx";
import Registierung from "./components/homepage/Registierung.jsx";
>>>>>>> yaaroub

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <div className="all">
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
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </TodoProvider>
    );
}
export default App;
