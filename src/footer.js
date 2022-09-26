const footer = (() => {
    const footer = document.getElementsByTagName('footer')[0];

    const addFooterText = () => {
        const footerText = document.createElement('span');

        footerText.textContent = 'Copyright © 2022 Jeffvf';

        return footerText;
    }

    const insertFooterElements = () => {
        footer.appendChild(addFooterText());
    }

    return {insertFooterElements}
})();

export {footer};