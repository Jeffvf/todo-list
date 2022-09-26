const makeHeader = (() => {
    const header = document.getElementsByTagName('header')[0];

    const titleText = () => {return 'My Todo List';}

    const title = (title) => {
        const h1 = document.createElement('h1');

        h1.textContent  = title;

        return h1;
    }

    const makeTitle = () => {
        const text = titleText();

        const titleElement = title(text);

        return titleElement;
    }

    const addElements = () => {
        const el = []
        el.push(makeTitle());

        for(let i = 0; i < el.length; i++){
            header.appendChild(el[i]);
        }
    }

    return {addElements};
})();

export {makeHeader};