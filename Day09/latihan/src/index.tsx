import React from 'react';
import ReactDOM from 'react-dom';

type ItemsTodo = {
    id:string,
    content:string,
    isDone: boolean,
}

type State = {
    todoItems:Array<ItemsTodo>,
    inputValue: string,
}

let state: State = {
    todoItems: [
        {id:'1', content:'Mandi', isDone: false},
        {id:'2', content:'Sarapan', isDone: false},
        {id:'3', content:'Belajar', isDone: false},
    ],
    inputValue:'',
}
type Props = {
    state: State
}

type ItemProps = {
    item: ItemsTodo,
    toggleDone: (id:string) => void
}

function Todo(props: ItemProps ) {
    let {item, toggleDone} = props;
    let content = item.isDone ? <s>{item.content}</s> : item.content;
    return(
        <li onClick={() => toggleDone(item.id)}>{content}</li>
    );
}

function App(props:Props) {
    let {state} = props;
    let items = state.todoItems;

    // function untuk ubah isDOne jadi false
    let toggleDone = (id:string) => {
        let newTodoItems = items.map( (item) =>{
            if(item.id === id) {
                return {...item, isDone: !item.isDone};
            } else {
                return item;
            }
        } );
        updateState(
            {...state, todoItems: newTodoItems}
        )
    }

    // function untuk tangkep nilai dari input
    let onInputItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value;
        let newInputValue = text;
        updateState(
            {...state, inputValue: newInputValue}
        )
    };

    let addNewItem = () => {
        let input = state.inputValue;
        let newTodoItems = {
            id: Math.random().toString(),
            content: input.toString(),
            isDone: false,
        };

        updateState(
            {...state, todoItems:[...state.todoItems, newTodoItems], inputValue:''}
        );
    };
    return(
        <div>
            <ul>
                {items.map( (item) => <Todo item={item} toggleDone={toggleDone}/> )}
            </ul>
            <input type="text" value={state.inputValue} onChange={onInputItem}/>
            <button onClick={addNewItem}>Save</button>
        
        </div>
        
    );
}

function updateState(newState : State) {
    state = newState
    render();
} 

let body= document.body
function render() {
    if(body) {
        ReactDOM.render(<App state={state}/>, document.body);
    }
}
render();
