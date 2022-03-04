import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    const tasks1 = [
        {id: 1, title: "HTML/CSS", isDone: true},
        {id: 2, title: "React", isDone: false},
        {id: 3, title: "Redux", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Cooking", isDone: true},
        {id: 2, title: "Cleaning", isDone: true},
        {id: 3, title: "Dish washing", isDone: true}
    ]
    const tasks3 = [
        {id: 1, title: "Reading", isDone: true},
        {id: 2, title: "Watching movies", isDone: true},
        {id: 3, title: "Playing games", isDone: true}
    ]

    return (
        <div className="App">
            <ToDoList title={"Wont to learn"} tasks={tasks1}/>
            <ToDoList title={"Don't want to learn"} tasks={tasks2}/>
            <ToDoList title={"Hobby"} tasks={tasks3}/>
        </div>
    );
}

export default App;
