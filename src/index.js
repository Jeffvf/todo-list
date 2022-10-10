import { makeHeader } from "./header.js";
import css from './styles.css'
import {body} from './body.js'
import {footer} from './footer.js'
import {forms} from './modules/forms.js'
import {Projects, Project} from './modules/project.js'

makeHeader.addElements();

if(!localStorage.getItem('projects')){
    const projects = new Projects();
    
    const proj = projects.add('Inbox');
    projects.add('Today');
    projects.add('Upcoming');

    localStorage.setItem('projects', JSON.stringify(projects.projectList));
    localStorage.setItem('currentProject', JSON.stringify(proj));
}

const currentProject = JSON.parse(localStorage.getItem('currentProject') || "[]");

const newProj = new Project(currentProject['name']);

newProj.taskList = currentProject.taskList;

forms.addClickEvents();
body.refreshElements();

footer.insertFooterElements();