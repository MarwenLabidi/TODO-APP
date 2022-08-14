import React from "react";

const Main = () => {
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
