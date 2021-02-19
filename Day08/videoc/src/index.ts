import { createElement } from 'react';
import {render} from 'react-dom';
import { App } from './app';

let todoItems = [
    {id:'3', content: "Buy Oreo", isDone: false},
    {id:'9', content: "Teach Bootcamp", isDone: false},
    {id:'1', content: "Clean Laptop", isDone: false},
];

// render(element, container, callback); Callback optional
render(
    createElement(App, {todoItems}),
    document.body);