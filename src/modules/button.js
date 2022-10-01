const button = (() => {
    const modal = document.getElementById("myModal");
    const createButton = () => {
        const btn = document.createElement('button');
        btn.textContent = '+';
        btn.classList.add('newTaskBtn');
        return btn;
    }

    const addFunction = (btn) => {
        btn.addEventListener('click', () =>{
            modal.style.display = "block";
        });
    }

    const getButton = () => {
        const btn = createButton();
        addFunction(btn);

        return btn;
    }

    return {getButton}
})();

export {button};