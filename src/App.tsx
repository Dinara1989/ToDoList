import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import {Header} from "./components/Header";
import {Button} from "./components/Button";

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
    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]

    // const Button1Foo=(subscriber:string, age:number)=>{
    //     console.log(subscriber, age)
    // }
    // const Button2Foo=(subscriber:string)=>{
    //     console.log(subscriber)
    // }
    // const [money, setMoney] = useState([
    //     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    //     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    //     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    //     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    //     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    //     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    //     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    //     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    // ])
    let[a, setA] = useState(1)

    const onClickHandler = () => {
      setA(++a);
        console.log(a)
    }
    const onClickDel = () => {
        setA(--a);
        console.log(a)
    }

    return (
        <div className="App">
            <Header headerTitle={"Have a nice day!"}/>
            <ToDoList title={"Wont to learn"} tasks={tasks1}/>
            <ToDoList title={"Don't want to learn"} tasks={tasks2}/>
            <h2>{a}</h2>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickDel}>0</button>
            {/*<Button name={'My YouTube Chanel-1'} callBack={()=>Button1Foo("I'm Vasya", 21)}/>*/}
            {/*<Button name={'My YouTube Chanel-1'} callBack={()=>Button2Foo("I'm Dinara")}/>*/}
        </div>
    )
}

export default App;
