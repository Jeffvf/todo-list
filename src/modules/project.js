function Task(title, description, dueDate, priority){
    return {title, description, dueDate, priority};
}

function createTask (title, description, dueDate, priority){
    console.log(this.taskList);
    const newTask = new Task(title, description, dueDate, priority);
    this.taskList.push(newTask);
}

function editTask (id, field, value){
    this.taskList[i].field = value;
}

function deleteTask (id){
    this.taskList.splice(id, 1);
}

function getAllTasks (){
    return this.taskList;
}

function Project(name){
    const taskList = [];
    
    const add = createTask;
    const edit = editTask;
    const remove = deleteTask;
    const getAll = getAllTasks;

    return {name, taskList, add, edit, remove, getAll};
}

export {Project};