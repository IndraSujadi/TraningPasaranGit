import React, { Component } from "react";
import { isDoStatement } from "typescript";
import type { State, TodoItem } from "./state";
import { Todo } from "./Todo";
import { NewItemForm } from "./NewItemForm";

// alasan membuat kompen dengan menggunakan class
// 1. Jika kita membutuhkan sebuah lifesycle method
// 2. Jika kita membutuhkan set State / local state

//
type Props = {
  color: string;
};

// contoh class untuk localstate
class App extends Component<Props, State> {
  state = {
    todoItems: [
      { id: "1", content: "Training", isDone: false },
      { id: "2", content: "Make a Report", isDone: false },
      { id: "3", content: "Exercise", isDone: false },
    ],
    inputValue: "",
    searchKey: "",
  };

  _toggleDone = (id: string) => {
    let newTodoItems = this.state.todoItems.map((item) => {
      if (item.id === id) {
        return (item = { ...item, isDone: !item.isDone });
      } else {
        return (item = item);
      }
    });
    this.setState({
      todoItems: newTodoItems,
    });
  };

  addNewItem = () => {
    let { todoItems, inputValue } = this.state;
    let newTodoItems = {
      id: Math.random().toString(),
      content: inputValue,
      isDone: false,
    };
    this.setState({
      todoItems: [...todoItems, newTodoItems],
      inputValue: "",
    });
  };

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // let { todoItems } = this.state;
    let newKey = event.target.value.toString();
    this.setState({
      searchKey: newKey,
    });
  };

  clearInput = () => {
    this.setState({
      inputValue: "",
    });
  };

  onInput = (text: string) => {
    this.setState({
      inputValue: text,
    });
  };

  render() {
    let { todoItems, searchKey } = this.state;
    let filteredTodoItems;
    if (searchKey === "") {
      filteredTodoItems = todoItems;
    } else {
      let lowerSearchKey = searchKey.toLowerCase();
      filteredTodoItems = todoItems.filter((item) => {
        return item.content.toLowerCase().includes(lowerSearchKey);
      });
    }
    return (
      <div>
        <input type="text" placeholder="Search..." onChange={this._onChange} />
        <ul>
          {filteredTodoItems.map((item) => (
            <Todo key={item.id} item={item} toggleDone={this._toggleDone} />
          ))}
        </ul>

        <NewItemForm
          addNewItem={this.addNewItem}
          onInput={this.onInput}
          inputValue={this.state.inputValue}
        />
        <button onClick={this.clearInput}>Clear</button>
      </div>
    );
  }
}

export default App;
