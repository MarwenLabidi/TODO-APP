import React from "react";
import { useState } from "react";

const Main = () => {
    const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
    //TODO create the functionality of adding a task and rendering it in the list
    // clear all the tasks
    return (
        <>
            <div>
                <input type='text' /> <button>add</button>
            </div>

            <section>
                <ul>
                    <li>
                        <input type='checkbox' /> <span>item 1</span>
                    </li>
                    <li>
                        <input type='checkbox' /> <span>item 2</span>
                    </li>
                </ul>
            </section>

            <footer>
                <p>5 items</p>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button>Clear completed</button>
            </footer>
        </>
    );
};

export default Main;
