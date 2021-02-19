import * as React from 'react';
import {createElement} from 'react';
// import type {State, Items} from './types/State';
import type {Props, Items} from './types/State';

function ToDo(props: Items) {
    let {content} = props
    // return createElement(
    //     'li',
    //     {onClick: () => console.log('Clicked')},
    //     item.content);
    return(<li onClick={() => console.log('Clicked')}> {content} </li>) ;
   
    // let content = item.isDone ? `<s>${item.name}</s>` : item.name;
    // return `<li onClick="emitEvent('done', '${item.id}')">${content}</li>`;
}


export function App(props: Props) {
    let {todoItems} = props
    return createElement('ul', {}, todoItems.map( (item) => {
        return createElement(ToDo, item);
    }),
    );
}

// <button onClick="emitEvent('increaseCount')">Increase</button>
// <button onClick="emitEvent('decreaseCount')">decrease</button>
