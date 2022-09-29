const tasks = (() => {
    const taskList = [];

    const Task = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority}
    }

    const createTask = (title, description, dueDate, priority) => {
        newTask = new Task(title, description, dueDate, priority);

        taskList.push(newTask);
    }

    const editTask = (id, field, value) => {
        taskList[i].field = value;
    }

    const deleteTask = (id) => {
        taskList.splice(id, 1);
    }

    return {createTask, editTask, deleteTask};
})();

export {tasks}