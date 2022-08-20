//TODO? get all the functions in one file an export them

export const showTasksInTheList = (tasks, type, Component,callBack) => {
        let f='false';
        let t='true';
        let taskCompleted = 'task.Completed'
        if (tasks.length < 1) {
                return;
        }
        if (type === "Active") {
                return <Component tasks={tasks} Type={f} callBack={callBack} />;
        } else if (type === "Completed") {
                return <Component tasks={tasks} Type={t} callBack={callBack} />;
        } else {
                return <Component tasks={tasks} Type={taskCompleted} callBack={callBack} />;
        }
};

