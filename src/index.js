import { makeHeader } from "./header.js";
import css from './styles.css'
import {body} from './body.js'
import {footer} from './footer.js'
import {forms} from './modules/forms.js'
import {project} from './modules/project.js'

makeHeader.addElements();

if(!localStorage.getItem('projects')){
    const projects = new project.Projects();
    
    const proj = projects.add('Inbox');
    projects.add('Today');
    projects.add('Upcoming');

    localStorage.setItem('projects', JSON.stringify(projects.projectList));
    localStorage.setItem('currentProject', JSON.stringify(proj));
}

const currentProject = JSON.parse(localStorage.getItem('currentProject') || "[]");

const newProj = new project.Project(currentProject['name']);

newProj.taskList = currentProject.taskList;

project.loadTodayTasks();
project.loadUpcomingTasks();

forms.addClickEvents();
body.appendElements();

footer.insertFooterElements();