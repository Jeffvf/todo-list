import {body} from '/home/jefferson/top/todo-list/src/body.js'
import {Project, getLocalProjects} from '/home/jefferson/top/todo-list/src/modules/project.js'

const sidebar = (() => {

    const createSidebarElement = () => {
        const sidebar = document.createElement('div');

        sidebar.id = 'sidebar';

        return sidebar
    }

    const setListener = (tabs) => {
        tabs.forEach(tab => {
            tab[0].addEventListener('click', () => {
                localStorage.setItem('currentProject', JSON.stringify(tab[1]));
                body.appendElements();
            })
        })

        return tabs;
    }

    const createCancelBtn = (btn, input ,newProjectBtn) => {
        const cancel = document.createElement('button');

        cancel.textContent = 'Cancel';
        cancel.style.backgroundColor = 'Red'
        cancel.style.color = 'White';
        cancel.style.display = 'None';

        cancel.addEventListener('click', () => {
            btn.style.display = 'Block';
            input.style.display = 'None';
            newProjectBtn.style.display = 'None';
            cancel.style.display = 'None';
        })

        return cancel;
    }

    const createConfirmBtn = () => {
        const btn = document.createElement('button');
        const allProjects = getLocalProjects();
        
        btn.textContent = 'Add';
        btn.type = 'submit';
        btn.style.backgroundColor = 'Green';
        btn.style.color = 'white';
        
        btn.addEventListener('click', () => {
            const input = document.getElementById('new-project-input');

            const title = input.value;
            if(title != ''){
                const newProject = new Project(title);

                allProjects.push(newProject);

                localStorage.setItem('projects', JSON.stringify(allProjects));
                body.appendElements();
            }
        });

        btn.style.display = 'None';

        return btn;
    }

    const createProject = () => {
        const projectsDiv = document.createElement('div');

        projectsDiv.id = 'create-new-project';
        
        const btn = document.createElement('div');
        
        const input = document.createElement('input');
        input.style.display = 'None';
        input.id = 'new-project-input';
        
        
        btn.textContent = '+ New project';

        const newProjectBtn = createConfirmBtn();
        const cancelBtn = createCancelBtn(btn, input, newProjectBtn);
        
        btn.addEventListener('click', () => {
            btn.style.display = 'None';
            input.style.display = 'Block';
            cancelBtn.style.display = 'Block';
            newProjectBtn.style.display = 'Block';
        });
        
        projectsDiv.appendChild(input);
        projectsDiv.appendChild(newProjectBtn);
        projectsDiv.appendChild(cancelBtn);
        projectsDiv.appendChild(btn);

        return projectsDiv;

    }

    const addProjects  = () => {
        const allProjects = getLocalProjects();
        let tabs = []

        if(allProjects.length == 0){
            return;
        }
        
        const projects = document.createElement('div');

        for(let project of allProjects){
            const proj = document.createElement('span');

            proj.textContent = project.name;

            tabs.push([proj, project]);
        }
        
        const projectTab = setListener(tabs);

        projectTab.forEach(project => {
            projects.appendChild(project[0]);            
        })

        return projects;
    }

    const createSidebar = () => {
        const sidebar = createSidebarElement();

        sidebar.appendChild(addProjects());
        sidebar.appendChild(createProject());
        return sidebar
    }

    return {createSidebar};
})();

export {sidebar};