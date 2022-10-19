export class Component {
    render(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML = template;
        return true;
    }
    renderAdd(selector, HTMLtemplate) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML += HTMLtemplate;
        return true;
    }
    renderOuter(selector, HTMLtemplate) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.outerHTML = HTMLtemplate;
        return true;
    }
}
