const sidebar = (() => {
    const body = document.getElementsByTagName('main')[0];

    const createSidebarElement = () => {
        const sidebar = document.createElement('div');

        sidebar.id = 'sidebar';

        return sidebar
    }

    const addFixedElements = () => {
        const el = document.createElement('div');

        const inbox = document.createElement('span');
        inbox.textContent = 'Inbox';

        const todayTasks = document.createElement('span');
        todayTasks.textContent = 'Today';

        const upcomingTasks = document.createElement('span');
        upcomingTasks.textContent = 'Upcoming';

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