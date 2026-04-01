import { print, build } from "./utils.js"

const body = document.body;
const div = build("div","this is a div", "main-container", body);
build("p","this is a p", "my-p", div)