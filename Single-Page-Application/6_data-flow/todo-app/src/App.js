import React, { useState } from "react";
import './App.css';

function App()
{
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText ] = useState("");
    
    /**
     * @method createId();
     * @description Gibt eine zufällige ID zurück.
     * @returns { string }
     */
    const createId = () =>
    {
        return Math.random().toString(16).substr(2, 8); // 254e82e3
    }

    /**
     * @method addTask();
     * @description Fügt eine neue task ein.
     */
    const addTask = () =>
    {
        const newTask = {
            id: createId(),
            text: inputText,
            isFinished: false
        }
        console.log(newTask);

        setTasks(tasks => [...tasks, newTask]);

        setInputText("");
    }

    /**
     * @method toggleTask();
     * @description Schaltet den zustand eines tasks um.
     * @param { object } e
     * @param { string } id
     */
    const toggleTask = (e, id) =>
    {
        const currentTask = tasks.filter(task => task.id === id)[0];
        const otherTasks = tasks.filter(task => task.id !== id);

        currentTask.isFinished = !currentTask.isFinished;
        setTasks([...otherTasks, currentTask]);
        // setTasks([...otherTasks, currentTask]);
    }

    /**
     * @method deleteTask();
     * @description Löscht ein element aus der task array anhand der übergebenen ID
     * @param { object } e
     * @param { string } id
     */
    const deleteTask = (e, id) =>
    {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    /**
     * @method handleNewTaskInput();
     * @description Behandelt die eingabe des input elements.
     * @param { object } e 
     */
    const handleNewTaskInput = (e) =>
    {
        setInputText(e.target.value)
    }

    return (
        <div className="App">
            {/* Zum testen der anzeige für die ID */}
            { createId() }

            <h1>Todo App</h1>

            <h3>Neue Aufgabe</h3>

            <input onChange={ handleNewTaskInput } type="text" value={ inputText }></input>
            <button onClick={ addTask }>Add Task</button>

            <h3>Aufgaben</h3>
            {
                tasks.length > 0 ?
                <ul>
                    {
                        tasks.map((task, i) =>
                        {
                            return (
                                <li key={ i } className={ task.isFinished ? 'finished' : 'active' }>
                                    <span className="taskText" onClick={ (e) => toggleTask(e, task.id) }>
                                        { task.text }
                                    </span>
                                    <button onClick={(e) => deleteTask(e, task.id)}>X</button>
                                </li>
                            )
                        }).reverse()
                    }
                </ul>
                :
                <p className="noTasksMessage">Keine Aufgaben vorhanden</p>
            }
        </div>
    );
}

export default App;
