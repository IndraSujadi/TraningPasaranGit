export type Items = {
    id: string;
    content: string;
    isDone : boolean
}

export type State = {
    todoItems: Array<Items>,
    newItem : string,
}

export type Props = {
    todoItems: Array<Items>,
}