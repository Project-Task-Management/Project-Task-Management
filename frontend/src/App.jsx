<<<<<<< HEAD
=======
import Title from "./components/todo/Title";
import React from "react";
import AppHeader from "./components/todo/AppHeader";
import Appcontent from "./components/todo/Appcontent";


function App() {
    return (
        <div className="container">
            <Title>Todo List</Title>
            <div className="app__wrapper"></div>
            <AppHeader></AppHeader>
            <Appcontent></Appcontent>
        </div>
    );
}
>>>>>>> monsif

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
            <Route path="/registierung" element={<Registierung />}></Route>
                    </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );

    }
export default App;
