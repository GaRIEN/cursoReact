import "./App.css";
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoScrore } from "./TodoScore";
import {ButtonAgregarTodo} from "./ButtonAgregarTodo";

function App() {
  return (
    <div className="App">
      <TodoScrore/>
      <TodoInput/>
      <TodoList>
        <Todo/>
        <Todo />
        <Todo />
      </TodoList>

      <ButtonAgregarTodo />
    </div>
  );
}
export default App;