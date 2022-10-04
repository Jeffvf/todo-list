import {body} from '/home/jefferson/top/todo-list/src/body.js'
import {Project} from '/home/jefferson/top/todo-list/src/modules/project.js'

const sidebar = (() => {

    const createSidebarElement = () => {
        const sidebar = document.createElement('div');

        sidebar.id = 'sidebar';

        return sidebar
    }

    const setListener = (tab) => {
        const localProjects = JSON.parse(localStorage.getItem('projects'));
        let projObject;
        for(let project of localProjects){
            if(project.name == tab.textContent){
                projObject = project;
                break;
            }
        }

        const proj = new Project(projObject.name)
        proj.taskList = projObject.taskList;

        tab.addEventListener('click', () => {
            localStorage.setItem('currentProject', JSON.stringify(proj));
            body.appendElements();
        });

        return tab;
    }

    const addFixedElements = () => {
        const el = document.createElement('div');

        let inbox = document.createElement('span');
        inbox.textContent = 'Inbox';
        inbox = setListener(inbox);

        let todayTasks = document.createElement('span');
        todayTasks.textContent = 'Today';
        todayTasks = setListener(todayTasks);

        let upcomingTasks = document.createElement('span');
        upcomingTasks.textContent = 'Upcoming';
        upcomingTasks = setListener(upcomingTasks);

        el.appendChild(inbox);
        el.appendChild(todayTasks);
        el.appendChild(upcomingTasks);

        return el;
    }

    const addProjects  = (allProjects) => {
        if(allProjects.length == 0){
            return;
        }
        
        const projects = document.createElement('div');

        for(project of allProjects){
            const proj = document.createElement('span');

            proj.textContent = project.title;

            projects.appendChild(proj);            
        }

        return projects;
    }

    const createSidebar = () => {
        const sidebar = createSidebarElement()

        sidebar.appendChild(addFixedElements());

        return sidebar
    }

    return {createSidebar};
})();

export {sidebar};