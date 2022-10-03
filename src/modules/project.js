function Task(title, description, dueDate, priority){
    return {title, description, dueDate, priority};
}

function createTask (title, description, dueDate, priority){
    const newTask = new Task(title, description, dueDate, priority);
    this.taskList.push(newTask);

    localStorage.setItem('currentProject', JSON.stringify(this));
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

function createProject(name){
    const proj = new Project(name);

    localStorage.setItem('currentProject', JSON.stringify(proj));

    this.projectList.push(proj);

    return this.projectList[this.projectList.length-1];
}

function Projects(){
    const projectList = [];

    const add = createProject;
    const getAll = () => {return this.projectList;}

    return {add, getAll, projectList};
}

export {Projects, Project};