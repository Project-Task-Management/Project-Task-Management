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

export default App;
