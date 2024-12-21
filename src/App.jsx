import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        "Do some housework",
        "Learn React",
        "Go out and have a beer with friends",
    ]);

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, newTodo];
        setTodos(newTodoList);
    }

    return (
        <>
            <TodoInput handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} />
        </>
    );
}

export default App;
