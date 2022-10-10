import {sidebar} from './modules/sidebar.js';
import {button} from './modules/button.js'
import {Project, loadTodayTasks, loadUpcomingTasks, getLocalProjects} from './modules/project.js'
import {format} from 'date-fns'

const body = (() => {
    const mainBody = document.getElementsByTagName('main')[0];

    const getSidebar = () => {
        const newSidebar = sidebar.createSidebar();

        return newSidebar;
    }

    const getTasks = (project) => {
        const localProjects = getLocalProjects();
        const taskCard = document.createElement('div');
        taskCard.id = 'display-tasks';
        const projectTasks = project.taskList;
        
        if(project){
            for(let task of project.taskList){
                const div = document.createElement('div');
                div.classList.add('card');
                
                const titleDiv = document.createElement('div');
                titleDiv.classList.add('taskTitle');

                const title = document.createElement('h1');
                title.textContent = task.title;
                
                const close = document.createElement('span');
                close.textContent = 'X';
                close.classList.add('close');
                
                
                close.addEventListener('click', () => {
                    let currentProjectIndex;
                    for(let i = 0; i < localProjects.length; i++){
                        if(localProjects[i].name == project.name){
                            currentProjectIndex = i;
                            break;
                        }
                    }
                    
                    projectTasks.splice(projectTasks.indexOf(task), 1);
                    
                    project.taskList = projectTasks;

                    localProjects.splice(currentProjectIndex, 1);
                    localProjects.splice(currentProjectIndex, 0, project);
                    
                    localStorage.setItem('currentProject', JSON.stringify(project));
                    localStorage.setItem('projects', JSON.stringify(localProjects));
                    
                    body.refreshElements();
                })

                titleDiv.appendChild(title);
                titleDiv.appendChild(close);

                const elements = document.createElement('div');

                const description = document.createElement('p');
                description.textContent = 'Description: ' + task.description;

                const dueDate = document.createElement('p');
                const date = format(new Date(task.dueDate), 'MM/dd/yyyy');
                dueDate.textContent = 'Due date: ' + date;

                elements.appendChild(description);
                elements.appendChild(dueDate);

                const priority = document.createElement('h2');
                priority.textContent = 'Priority: ' + task.priority;
                priority.style = 'color:white';

                if(task.priority == 'Urgent'){
                    priority.style = 'color:red';
                }

                div.appendChild(titleDiv);
                div.appendChild(elements);
                div.appendChild(priority);

                taskCard.appendChild(div);
            }
        }

        return taskCard;
    }

    const setNewTaskBtn = () => {
        const div = document.createElement('div');
        div.id = 'btn-div';

        const btn = button.getButton();
        btn.id = 'btn-add-task';
        
        div.appendChild(btn);

        return div;
    }

    const refreshElements = () => {
        const currentProject = JSON.parse(localStorage.getItem('currentProject') || "[]");
        
        const project = new Project(currentProject['name']);
        
        project.taskList = currentProject.taskList;

        const elements = [];
        if(document.getElementById('sidebar')){
            document.getElementById('sidebar').remove();
            document.getElementById('display-tasks').remove();
            document.getElementById('btn-div').remove();
        }
        
        loadTodayTasks();
        loadUpcomingTasks();

        elements.push(getSidebar());
        elements.push(getTasks(project));
        elements.push(setNewTaskBtn());

        for(let i = 0; i < elements.length; i++){
            mainBody.appendChild(elements[i]);
        }

    }

    return {refreshElements, getTasks};
})();

export {body};