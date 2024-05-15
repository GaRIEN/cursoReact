import "./App.css";
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoScrore } from "./TodoScore";
import { ButtonAgregarTodo } from "./ButtonAgregarTodo";
import React from "react";

const defaultTodos = [
  { text: "llorar por la llorona", completed: true },
  { text: "llorar picando cebolla", completed: true }
];

function App() {
  return (
    <React.Fragment>
      <TodoScrore completed={10} total={25} />
      <TodoInput />
      <TodoList>
        {defaultTodos.map((todoitem) => (
          <Todo
            key={todoitem.text}
            text={todoitem.text}
            completed={todoitem.completed}
          />
        ))}
      </TodoList>
      <ButtonAgregarTodo />
    </React.Fragment>
  );
}
export default App;
