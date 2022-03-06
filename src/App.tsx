import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";
// import {Students} from "./Students";
import {Header} from "./Header";
import {Footer} from "./Footer"

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
    // const students1 = [
    //     {id: 1, name: "John", age: "21", isStudent: true},
    //     {id: 2, name: "Jim", age: "19", isStudent: false},
    //     {id: 3, name: "Jonson", age: "20", isStudent: true}
    // ]
    // const myFirstSubscriber = () => {
    //     console.log("Hello, I'm Vasya!")
    // }
    // const mySecondSubscriber = () => {
    //     console.log("Hello, I'm Dinara!")
    // }

    const onClickHandler = (name:string) => {
        console.log(name)
    }

    return (
        <div className="App">
            <Header headerTitle={"Have a nice day!"}/>
            <ToDoList title={"Wont to learn"} tasks={tasks1}/>
            <ToDoList title={"Don't want to learn"} tasks={tasks2}/>
            {/*<Students title={"Students"} students={students1}/>*/}
            <button onClick={(event: MouseEvent<HTMLButtonElement>) =>onClickHandler(name: 'Vsya')}>MyYouTubeChanel-1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) =>onClickHandler(name: 'Dinara')}>MyYouTubeChanel-1</button>
            <Footer/>
        </div>
    )
}

export default App;
