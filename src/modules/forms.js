const forms = (() => {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    const addClickEvents = () => {
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    return {addClickEvents};

})();

export {forms};

