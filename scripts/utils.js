export const print = (i) => console.log(i)

export const build = (tag, text, id, parent) => {
    if (!parent || !parent.appendChild) {
        throw new Error("parent must be a valid node!");
    }
    const element = document.createElement(tag);
    element.textContent = text;
    if (id) element.id = id;
    parent.appendChild(element);
    return element
}