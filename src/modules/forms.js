import {body} from '/home/jefferson/top/todo-list/src/body.js'
import {Project} from './project.js'

const forms = (() => {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const btn = document.getElementById("create-btn");

    const addClickEvents = () => {
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        btn.onclick = function(){
            const currentProject = JSON.parse(localStorage.getItem('currentProject') || "[]");
            const proj = new Project(currentProject['name']);

            proj.taskList = currentProject.taskList;
            
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const date = document.getElementById('date').value;
            const priorityList = document.getElementsByName('priority');

            if(title != '' && date != ''){
                
                let priority;
                for(let i = 0; i < priorityList.length; i++){
                    if(priorityList[i].checked){
                        priority = priorityList[i].value;
                        break;
                    }
                }
                
                proj.add(title, description, date, priority);
                localStorage.setItem('currentProject', JSON.stringify(proj));
                
                body.refreshElements();
            }
        }
    }

    return {addClickEvents};

})();

export {forms};