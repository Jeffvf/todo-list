import {sidebar} from './modules/sidebar.js';
import {button} from './modules/button.js'
import {Project} from './modules/project.js'

const body = (() => {
    const mainBody = document.getElementsByTagName('main')[0];

    const getSidebar = () => {
        const newSidebar = sidebar.createSidebar();

        return newSidebar;
    }

    const getTasks = (project) => {
        const taskCard = document.createElement('div');
        taskCard.id = 'display-tasks';

        if(project){
            for(let task of project.taskList){
                const div = document.createElement('div');
                div.classList.add('card');

                const title = document.createElement('h1');
                title.textContent = task.title;

                const description = document.createElement('p');
                description.textContent = task.description;

                const dueDate = document.createElement('p');
                dueDate.textContent = task.dueDate;

                const priority = document.createElement('p');
                priority.textContent = task.priority;

                if(task.priority == 'Urgent'){
                    priority.style = 'color:red';
                }

                div.appendChild(title);
                div.appendChild(description);
                div.appendChild(dueDate);
                div.appendChild(priority);

                taskCard.appendChild(div);
            }
        }

        return taskCard;
    }

    const getNewTaskBtn = () => {
        const div = document.createElement('div');
        div.id = 'btn-div';

        const btn = button.getButton();
        btn.id = 'btn-add-task';
        
        div.appendChild(btn);

        return div;
    }

    const appendElements = () => {
        const test = JSON.parse(localStorage.getItem('currentProject') || "[]");
        
        
        const project = new Project(test['name']);
        
        project.taskList = test.taskList;

        const elements = [];
        if(document.getElementById('sidebar')){
            document.getElementById('sidebar').remove();
            document.getElementById('display-tasks').remove();
            document.getElementById('btn-div').remove();
        }
        
        elements.push(getSidebar());
        elements.push(getTasks(project));
        elements.push(getNewTaskBtn());

        for(let i = 0; i < elements.length; i++){
            mainBody.appendChild(elements[i]);
        }
    }

    return {appendElements, getTasks};
})();

export {body};