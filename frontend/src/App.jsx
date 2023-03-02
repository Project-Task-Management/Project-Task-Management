import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/homepage/Header.jsx";
import Home from "./components/homepage/Home.jsx";
import Navigtion from "./components/homepage/Navigtion.jsx";
import Kalender from "./components/kalender/Kalender.jsx";
import Notiz from "./components/notiz/Notiz.jsx";
import Todo from "./components/todo/ToDo.jsx";
import Products from "./components/ProductsManagementSystem/Products.jsx";
import Registierung from "./components/homepage/Registierung.jsx";

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
    );
}
export default App;
