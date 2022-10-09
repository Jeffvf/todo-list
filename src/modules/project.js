import {parseISO, isToday, differenceInDays} from 'date-fns'
import {body} from '/home/jefferson/top/todo-list/src/body.js'

function Task(title, description, dueDate, priority){
    return {title, description, dueDate, priority};
}

function createTask (title, description, dueDate, priority){
    const newTask = new Task(title, description, dueDate, priority);
    this.taskList.push(newTask);

    localStorage.setItem('currentProject', JSON.stringify(this));

    const projects = JSON.parse(localStorage.getItem('projects'));
    for(let project of projects){
        if(project.name == this.name){
            project['taskList'] = this.taskList;
        }
    }

    localStorage.setItem('projects', JSON.stringify(projects))
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

function getLocalProjects(){
    const projects = new Projects();
    const localProjects = JSON.parse(localStorage.getItem('projects'));

    projects.projectList = localProjects;

    return localProjects;
}

function loadTodayTasks(){
    const localProjects = getLocalProjects();
    const todayTasks = [];
    let todayProject;

    for(let project of localProjects){
        if(project.name != 'Today'){
            for(let task of project.taskList){
                const date = parseISO(task.dueDate, 'yyyy-MM-dd', new Date());

                if(isToday(date)){
                    todayTasks.push(task);
                }
            }
        }
        else{
            todayProject = project;
            localProjects.splice(localProjects.indexOf(todayProject), 1);
        }
    }

    todayProject.taskList = todayTasks;

    localProjects.splice(2, 0, todayProject);

    localStorage.setItem('projects', JSON.stringify(localProjects));
}

function loadUpcomingTasks(){
    const localProjects = getLocalProjects();
    const upcomingTasks = [];
    let upcomingTasksProject;

    for(let project of localProjects){
        if(project.name != 'Upcoming'){
            for(let task of project.taskList){
                const date = parseISO(task.dueDate, 'yyyy-MM-dd', new Date());
                const remainingDays = differenceInDays(date, new Date());

                if(remainingDays >0 && remainingDays <= 7){
                    upcomingTasks.push(task);
                }
            }
        }
        else{
            upcomingTasksProject = project;
            localProjects.splice(localProjects.indexOf(upcomingTasksProject), 1);
        }
    }

    upcomingTasksProject.taskList = upcomingTasks;

    localProjects.splice(1, 0, upcomingTasksProject);

    localStorage.setItem('projects', JSON.stringify(localProjects));
}

export {Projects, Project, getLocalProjects, loadTodayTasks, loadUpcomingTasks};