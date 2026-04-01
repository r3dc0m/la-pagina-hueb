export const print = (i) => console.log(i)

export const build = (tag, text, id, parent) => {
  const element = document.createElement(tag);
  element.textContent = text;
  if (id) element.id = id;
  document.getElementById(parent).appendChild(element);
  return element
}
