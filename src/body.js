import {sidebar} from './modules/sidebar.js';

const body = (() => {
    const mainBody = document.getElementsByTagName('main')[0];

    const getSidebar = () => {
        const newSidebar = sidebar.createSidebar();

        return newSidebar;
    }

    const getTasks = () => {

    }

    const getNewTaskBtn = () => {

    }

    const appendElements = () => {
        const elements = [];

        elements.push(getSidebar());

        for(let i = 0; i < elements.length; i++){
            mainBody.appendChild(elements[i]);
        }
    }

    return {appendElements};
})();

export {body};