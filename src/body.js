import {sidebar} from './modules/sidebar.js';
import {button} from './modules/button.js'
import {Project} from './modules/project.js'

const body = (() => {
    const mainBody = document.getElementsByTagName('main')[0];

    const getSidebar = () => {
        const newSidebar = sidebar.createSidebar();

        return newSidebar;
    }

    const getTasks = (projectName) => {
        const task = document.createElement('div');

        return task;
    }

    const getNewTaskBtn = () => {
        const div = document.createElement('div');
        const btn = button.getButton();
        btn.id = 'btn-add-task';
        
        div.appendChild(btn);

        return div;
    }

    const appendElements = () => {
        const elements = [];

        elements.push(getSidebar());
        elements.push(getTasks());
        elements.push(getNewTaskBtn());

        for(let i = 0; i < elements.length; i++){
            mainBody.appendChild(elements[i]);
        }
    }

    return {appendElements};
})();

export {body};