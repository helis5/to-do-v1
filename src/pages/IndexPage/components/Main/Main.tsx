import React, { useState } from 'react';
import "./Main.scss";

interface IToDoList {
    id: number;
    phoneNumber: string;
}

const ToDoList: React.FC = () => {


    const addTask = () => {
        
    }


    return (
        <div className="Main">
            <div id="to-do-list">
                <div className="column" id="to-do">
                    <div className="header">
                        <p>To Do</p>
                    </div>
                    <div className="main">

                    </div>
                    <div className="footer">
                        <input className="name" placeholder="Название задачи"></input>
                        <input className="description" placeholder="Описание задачи"></input>
                        <button className="button" onClick={addTask}>Добавить задачу</button>
                    </div>
                </div>
                <div className="column" id="in-progress">
                    <div className="header">
                        <p>In Progress</p>
                    </div>
                    <div className="main">

                    </div>
                    <div className="footer">
                        <input className="name" placeholder="Название задачи"></input>
                        <input className="description" placeholder="Описание задачи"></input>
                        <button className="button" onClick={addTask}>Добавить задачу</button>
                    </div>
                </div>
                <div className="column" id="done">
                    <div className="header">
                        <p>Done</p>
                    </div>
                    <div className="main">

                    </div>
                    <div className="footer">
                        <input className="name" placeholder="Название задачи"></input>
                        <input className="description" placeholder="Описание задачи"></input>
                        <button className="button" onClick={addTask}>Добавить задачу</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;