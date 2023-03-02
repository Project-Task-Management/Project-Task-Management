import React from "react";
import Appcontent from "./Appcontent";
import AppHeader from "./AppHeader";
import Buton from "./Buton";
import TodoModal from "./TodoModal";
import Title from "./Title";
import "./ToDo.scss";
const ToDo = () => {
    return (
        <div>
            <Title />
            <AppHeader />
            <Appcontent />
            <TodoModal />
        </div>
    );
};

export default ToDo;
